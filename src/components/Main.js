import React, { useState } from 'react'
import './Main.css'
import { useTelegram } from '../hooks/TelegramWebApp'

const Main = () => {
    const {onClose,increment,decrement,bot} = useTelegram();
    const [count, setCount] = useState()
  return (
    <div className='MainBox'>
        <h1>Count: {count}</h1>
        <div className='buttonContainer'>
            <button onClick={()=> decrement(count, setCount)}>Minus</button>
            <button onClick={()=> increment(count, setCount)}>Pilus</button>
            <button onClick={onClose}>Orqaqga</button>
        </div>
    </div>
  )
}

export default Main