import React, { useState } from 'react';
import { useTelegram } from '../hooks/TelegramWebApp';
import './Main.css'

const Main = () => {
    const { onClose, increment, decrement } = useTelegram();
    const [count, setCount] = useState(0);

    return (
        <div className='MainBox'>
            <h1>Count: {count}</h1>
            <div className="buttonContainer">
                <button onClick={() => decrement(count, setCount)}>Minus</button>
                <button onClick={() => increment(count, setCount)}>Plus</button>
                <button onClick={onClose}>Orqaga</button>
            </div>
        </div>
    )
}

export default Main
