import React, { useEffect, useState } from 'react'
import './DiceRoll.css'

const DiceRoll = (props) => {
  const [randomNum, setRandomNum] = useState(()=>Math.floor(Math.random() * 6) + 1)

  const rollDice = () => {
    const number = Math.floor(Math.random() * 6) + 1
    props.setTotalPoint(props.totalPoint + number)
    console.log(number)
    setRandomNum(number)
  }

  const resetGame = () => {
    props.setTotalPoint(0)
    setRandomNum(()=>Math.floor(Math.random()*6 + 1))
  }
  return (
    <div>
      <div className="diceblock">
        <img 
          src={`./DiceImg/Dice_${randomNum}.png`} 
          alt={`Dice showing ${randomNum}`} 
          onClick={rollDice}
        />
        <span>Click to Roll</span>
        <h1>Total Point : {props.totalPoint}</h1>
        <button onClick={resetGame}>Reset Game</button>
      </div>
    </div>
  )
}

export default DiceRoll
