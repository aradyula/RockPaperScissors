import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import {RulesButton, ImageButton, PopupContainer} from './styledComponents'

const GameRules = () => (
  <PopupContainer>
    <Popup modal trigger={<RulesButton type="button">RULES</RulesButton>}>
      {close => (
        <>
          <RiCloseLine
            type="button"
            className="trigger-button"
            onClick={() => close()}
          />
          <ImageButton
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </>
      )}
    </Popup>
  </PopupContainer>
)
export default GameRules
