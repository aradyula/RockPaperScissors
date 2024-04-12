import {ImageButton, ListItem, Button} from './styledComponents'

const GameButton = props => {
  const {details, onSelection} = props
  const {id, imageUrl} = details

  const directionChange = () => {
    //  console.log('Button clicked')
    onSelection(id)
  }
  const dataTestId = () => {
    switch (id) {
      case 'ROCK':
        return 'rockButton'
      case 'PAPER':
        return 'paperButton'
      case 'SCISSORS':
        return 'scissorsButton'
      default:
        return null
    }
  }
  return (
    <ListItem>
      <Button
        type="button"
        onClick={directionChange}
        data-testid={dataTestId()}
      >
        <ImageButton src={imageUrl} alt={id} />
      </Button>
    </ListItem>
  )
}
export default GameButton
