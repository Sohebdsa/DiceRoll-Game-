import './App.css'
import DiceRoll from './components/DiceRoll'
import { useState } from 'react'
function App() {
  const [totalPoint, setTotalPoint] = useState(0)
  return (

    <>
    <div className="container">
      <div className="card">
         <h1>Dice Roll Game</h1>
          <DiceRoll totalPoint={totalPoint} setTotalPoint={setTotalPoint}/>
      </div>
    </div>
    </>
  )
}

export default App
