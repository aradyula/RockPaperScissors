import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background-size: cover;
  background-color: #223a5f;
  color: #ffffff;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const ImageButton = styled.img`
  height: 150px;
  width: 150px;
  border: 1px solid transparent;
  border-radius: 50px;
  background-color: transparent;
`
export const ScoreContainer = styled.div`
  width: 80%;
  background-color: transparent;
  border: #ffffff 5px solid;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: 'Bree Serif';
  padding: 20px;
`

export const HeadingContainer = styled.div`
  color: #ffffff;
`

export const ScoreHeading = styled.h1`
  font-size: 25px;
`

export const Score = styled.p`
  font-size: 25px;
  text-align: center;
  font-family: 'Roboto';
`
export const ScoreButton = styled.div`
  background-color: #ffffff;
  padding: 10px;
  color: #223a5f;
  border: none;
  border-radius: 15px;
`

export const GameContainer = styled.ul`
  width: 30%;
  flex-wrap: wrap;
  height: 80%;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`
export const RulesButton = styled.div`
  width: 60px;
  font-family: 'Bree Serif';
  border: none;
  border-radius: 10px;
  align-self: flex-end;
`
export const ResultContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

export const ResultNames = styled.h1`
  font-size: 25px;
`

export const ResultText = styled.p`
  font-size: 40px;
`

export const PlayButton = styled.button`
  width: 120px;
  font-family: 'Bree Serif';
  border: none;
  border-radius: 10px;
  align-self: center;
`
