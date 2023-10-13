import React, {useState} from "react";

const StreakDisplay = () => {
    const [streak, setStreak] = useState(0);

    return(
        <div className="Streak">
            <h1>Current Streak</h1>
            <hr></hr>
            <div>
              <p style={{ fontSize: "4rem", marginTop: "2rem", marginBottom: "0" }}>
                <span aria-label="fire emoji" role="img">
                  🔥
                </span>
              </p>
            </div>
            <p>{streak} days</p>
        </div>
    );

};

export default StreakDisplay;
