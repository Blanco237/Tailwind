import React, { Fragment, useState, useEffect } from 'react';
import Header from '../components/Header';
import '../assets/styles/components/About.css';

const About = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    let secondsT = 0
    let minutesT = 0;
    let hoursT = 0;

     useEffect(()=>{
        const interval = setInterval(()=>{
            setSeconds(seconds => seconds + 1);
        }, 10);
       return () => clearInterval(interval);
     }, []);
    
    useEffect(()=>{
        if(seconds>=60){
            setMinutes(minutes+1);
            setSeconds(0);
        }
    })

    useEffect(()=>{
        if(minutes>=60){
            setHours(hours+1);
            setMinutes(0);
        }
    })

    function Restart(){
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    }

    return (
        <Fragment>
            <div>
                <h1>About Page</h1>
            </div>
            <div className="timer_body">
                <h4 className="title">Assignment: <span style={{color: "red"}}>Timer</span></h4>
                <div id="labels">
                    <p className="hour_label">Hours</p>
                    <p className="minutes_label">Minutes</p>
                    <p className="seconds_label">Seconds</p>
                </div>
                <div id="timers">
                    <div id="hours">{hours}</div>
                    <div id="minutes">{minutes}</div>
                    <div id="seconds">{seconds}</div>
                </div>
                <div id="restart">
                    <button id='btn' onClick={Restart}>Restart</button>
                </div>
            </div>
        </Fragment>
    )
}

export default About;
