import React, { useState } from 'react';

const TimeRefresher = () => {

    let newTime = new Date().toLocaleTimeString();

    const [currentTime, setCurrentTime] = useState(newTime)


    const getTime = () => {
        newTime = new Date().toLocaleTimeString();
        setCurrentTime(newTime);
    }

    return (
        <>
        <div className="main-div">
        <h1 style={{fontSize: '40px'}}>{currentTime}</h1>
        <button className="button" onClick={getTime}>Get Time</button>
        </div>
        </>
    )
}

export default TimeRefresher;