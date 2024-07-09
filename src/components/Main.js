import React, { useState } from 'react';
import { useTelegram } from '../hooks/TelegramWebApp';
import './Main.css';
import hamsterImage from '../assets/lion.jpg'; // Hamster image URL

const Main = () => {
    const { onClose, increment, decrement } = useTelegram();
    const [count, setCount] = useState(0);

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
                            <div className="level">
                                <span>Grandmaster</span>
                                <span>9 / 11</span>
                            </div>
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
                <div className="hamster-image">
                {/* <button >Plus</button> */}
                    <img src={hamsterImage} alt="Hamster" onClick={() => increment(count, setCount)}/>
                </div>
                <div className="button-container">
                    <button onClick={() => decrement(count, setCount)}>Minus</button>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Main;
