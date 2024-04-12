import {Component} from 'react'
import GameRules from '../GameRules'
import GameButton from '../GameButton'
import {
  Container,
  ScoreContainer,
  ScoreHeading,
  HeadingContainer,
  ScoreButton,
  GameContainer,
  ResultContainer,
  ResultNames,
  ResultText,
  PlayButton,
  RulesButton,
  Score,
  ImageButton,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GameView extends Component {
  state = {
    isGameOver: false,
    score: 0,
    playerSelected: {},
    opponentSelected: choicesList[Math.floor(Math.random() * 3)],
    matchResult: '',
  }

  onPlayAgain = () => {
    this.setState({
      isGameOver: false,
      playerSelected: {},
      opponentSelected: choicesList[Math.floor(Math.random() * 3)],
      matchResult: '',
    })
  }

  userChoice = id => {
    const {opponentSelected, score} = this.state
    const selectedOption = choicesList.filter(each => each.id === id)
    if (selectedOption[0].id === opponentSelected.id) {
      this.setState({matchResult: 'IT IS DRAW', isGameOver: true})
    } else if (
      (selectedOption[0].id === 'ROCK' && opponentSelected.id === 'SCISSORS') ||
      (selectedOption[0].id === 'SCISSORS' &&
        opponentSelected.id === 'PAPER') ||
      (selectedOption[0].id === 'PAPER' && opponentSelected.id === 'ROCK')
    ) {
      this.setState({matchResult: 'YOU WON'})
      this.setState({
        score: score + 1,
        isGameOver: true,
      })
    } else {
      this.setState({
        isGameOver: true,
        matchResult: 'YOU LOSE',
        score: score - 1,
      })
    }

    //  console.log(selectedOption[0])
    this.setState({
      isGameOver: true,
      playerSelected: selectedOption[0],
    })
  }

  renderGameView = () => (
    <GameContainer>
      {choicesList.map(image => (
        <GameButton
          key={image.id}
          details={image}
          onSelection={this.userChoice}
        />
      ))}
    </GameContainer>
  )

  renderResultsView = () => {
    const {playerSelected, opponentSelected, matchResult} = this.state
    return (
      <>
        <ResultContainer>
          <div>
            <ResultNames>You</ResultNames>
            <ImageButton src={playerSelected.imageUrl} alt="your choice" />
          </div>
          <div>
            <ResultNames>Opponent</ResultNames>
            <ImageButton
              src={opponentSelected.imageUrl}
              alt="opponent choice"
            />
          </div>
        </ResultContainer>
        <ResultText>{matchResult}</ResultText>
        <PlayButton onClick={this.onPlayAgain}>Play Again</PlayButton>
      </>
    )
  }

  render() {
    const {score, isGameOver} = this.state
    return (
      <Container>
        <ScoreContainer>
          <HeadingContainer>
            <ScoreHeading>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </ScoreHeading>
          </HeadingContainer>
          <ScoreButton>
            <Score>Score</Score>
            <Score>{score}</Score>
          </ScoreButton>
        </ScoreContainer>
        {isGameOver ? this.renderResultsView() : this.renderGameView()}
        <RulesButton>
          <GameRules />
        </RulesButton>
      </Container>
    )
  }
}
export default GameView
