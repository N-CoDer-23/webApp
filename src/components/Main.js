import React, { useState, useEffect } from 'react';
import { useTelegram } from '../hooks/TelegramWebApp';
import './Main.css';
import hamsterImage from '../assets/lion.jpg'; // Hamster image URL

const Main = () => {
    const { onClose, increment } = useTelegram(); // decrement ni hozircha ishlatmaymiz
    const [count, setCount] = useState(0);

    useEffect(() => {
        const savedCount = parseInt(localStorage.getItem('count'), 10);
        if (!isNaN(savedCount)) {
            setCount(savedCount);
        }
    }, []);

    const handleTouch = (e) => {
        const numTouches = e.touches.length;
        increment(count, setCount, numTouches);
    };

    return (
        <div className="main-box">
            <div className="admin-controller">
                <div className="header">
                    <div className="profit">
                        <h1>Lion Combat</h1>
                    </div>
                    <div className="profile">
                        <img src={hamsterImage} alt="" className='profile-pic'/>
                        <div>
                            <h2>Nuriddin (CEO)</h2>
                            <div className="level"></div>
                        </div>
                        <button className='x' onClick={onClose}>X</button>
                    </div>
                </div>
                <div className="task-container">
                    <div className="task">
                        <span>Vazifalar ro'yxati</span>
                        <span>18:59</span>
                    </div>
                    <div className="task">
                        <span>Kundalik shifr</span>
                        <span>13:59</span>
                    </div>
                    <div className="task">
                        <span>Kundalik kombinatsiya</span>
                        <span>06:59</span>
                    </div>
                </div>
                <div className="currency">
                    <span>{count}</span>
                </div>
                <div className="hamster-image" onTouchStart={handleTouch}>
                    <img src={hamsterImage} alt="Hamster"/>
                </div>
                <div className="button-container"></div>
            </div>
        </div>
    );
};

export default Main;
