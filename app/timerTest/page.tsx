"use client";

import React, { useState } from "react";
import Timer from "@/app/ui/timer"; // Adjust the import path as necessary

const ExercisePage: React.FC = () => {
    const [setTimes, setSetTimes] = useState<number[]>([]); // Store times for each set

    const handleSaveTime = (time: number) => {
        setSetTimes((prevTimes) => [...prevTimes, time]); // Add the saved time
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Workout Sets</h1>

            {/* Timer for the current set */}
            <div className="mb-6">
                <Timer workoutName="Set Timer" onSaveTime={handleSaveTime} />
            </div>

            {/* Display saved times */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">Completed Sets</h2>
                {setTimes.length > 0 ? (
                    <ul className="list-disc list-inside space-y-2">
                        {setTimes.map((time, index) => (
                            <li key={index} className="text-lg">
                                Set {index + 1}: {Math.floor(time / 60)}:
                                {`${time % 60}`.padStart(2, "0")} minutes
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No sets completed yet.</p>
                )}
            </div>
        </div>
    );
};

export default ExercisePage;
