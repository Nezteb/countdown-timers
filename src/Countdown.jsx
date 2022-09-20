import './App.css'
import React, { useEffect, useState } from "react";

function Countdown({ text, targetDate }) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    function calculateTimeLeft() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        const days = Math.floor(timeLeft / day);
        const hours = Math.floor((timeLeft % day) / hour);
        const minutes = Math.floor((timeLeft % hour) / minute);
        const seconds = Math.floor((timeLeft % minute) / second);

        return { days, hours, minutes, seconds }
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const { days, hours, minutes, seconds } = timeLeft

    return (
        <div className="border-2 p-2 m-2 flex flex-col items-center">
            <div className="border-b-2 pb-2">
                <h1 className="font-mono font-bold text-center text-5xl">{text}</h1>
                <h4 className="font-mono font-bold text-center text-2xl">({targetDate.toLocaleDateString()})</h4>
            </div>
            <div className="grid grid-flow-col gap-5 auto-cols-min pt-2">
                <div className="flex flex-col items-center">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": days }}></span>
                    </span>
                    <span>days</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": hours }}></span>
                    </span>
                    <span>hours</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": minutes }}></span>
                    </span>
                    <span>minutes</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": seconds }}></span>
                    </span>
                    <span>seconds</span>
                </div>
            </div>
        </div>
    )
}

export default Countdown;