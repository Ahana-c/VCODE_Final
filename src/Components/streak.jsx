import React, {useState} from "react";

const StreakDisplay = () => {
    const [streak, setStreak] = useState(0);

    return(
        <div>
            <h2>Streaks</h2>
            <hr></hr>
            <p>Current Streak: {streak} days</p>
        </div>
    );

};

export default StreakDisplay;
