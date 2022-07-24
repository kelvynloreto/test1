import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import generateNewColor from './tools/generateNewColor.js'

function App() {
  const [color, setColor] = useState(0)
   const randomColor = () => {
    setColor(generateNewColor());
    };

  return (
    <div className="App">
      <QuoteBox  randomColor={randomColor}/>
    
    </div>
  )
}

export default App
