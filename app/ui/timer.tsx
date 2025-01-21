"use client";

import React, { useState, useEffect } from "react";

interface TimerProps {
    workoutName: string; // Accepts the workout name as a prop
    onSaveTime?: (time: number) => void; // Callback to save the timer's time
}

const Timer: React.FC<TimerProps> = ({ workoutName, onSaveTime }) => {
    const [seconds, setSeconds] = useState(0); // Current time in secs
    const [isRunning, setIsRunning] = useState(false); // Timer running status

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;

        if (isRunning) {
            timer = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);
        } else if (timer) {
            clearInterval(timer);
        }

        return () => {
            if (timer) clearInterval(timer);
        };
    }, [isRunning]);

    // minutes seconds
    const formatTime = (totalSeconds: number) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    // save and reset
    const handleSave = () => {
        if (onSaveTime) {
            onSaveTime(seconds); // Notify parent with the time
        }
        setIsRunning(false);
        setSeconds(0); // Reset the timer
    };

    return (
        <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
            {/* Left side Workout name */}
            <div className="text-lg font-semibold text-gray-800">{workoutName}</div>

            {/* Right side Timer and buttons */}
            <div className="flex items-center space-x-4">
                <span className="text-xl font-bold text-blue-600">{formatTime(seconds)}</span>
                <button
                    onClick={() => setIsRunning((prev) => !prev)}
                    className={`px-4 py-2 text-white font-semibold rounded-md transition ${
                        isRunning ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
                    }`}
                >
                    {isRunning ? "Stop" : "Start"}
                </button>
                <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default Timer;
