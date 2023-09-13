import React, {useState, useEffect} from "react";

const Timer = ({ eventDate }) => {
    // calculate the time remaining
    const calculateRemainingTime = () =>{
        const presentDate = new Date().getTime();
        const timeRemaining = eventDate - presentDate;

        if(timeRemaining <= 0){
            return {days: 0, hours: 0, minutes: 0, seconds: 0};
        }

        // conversion rates for time values
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / (1000));
        
        return {days, hours, minutes, seconds}
    };


    const [time, setTime] = useState(calculateRemainingTime());


    useEffect(
        () => {
            const timeInterval = setInterval(() =>{setTime(calculateRemainingTime)} , 1000);

            return () => clearInterval(timeInterval);
        }, []);

    return(
        <div className="Timer">
            <div className="title">New Year Countdown</div>
            <div className="TimerBlock">
                <div className="block day">
                    {time.days}d 
                </div>
                
                <div className="block hours">
                    {time.hours}h 
                </div>
                
                <div className="block mins">
                    {time.minutes}m
                </div>
                
                <div className="block secs">
                    {time.seconds}s
                </div>
            </div>
        </div>
    )
}

export default Timer;