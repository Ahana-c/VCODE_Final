import React, { useState } from "react";


const Tasks = () => {
    const [showAllTask, setShowAllTask] = useState(false);
    const totaldays = 30;

    const daysArray = Array.from({ length: totaldays }, (_, index) => index + 1);

    return(
        <div>
            {daysArray.slice(0, showAllTask ? undefined : 9).map((day) => (
            <div className="day-box" key={day}>
                <div className="Task">
                    <h3>Day-{day}</h3>
                    <h4>Day {day} of {daysArray.length}-Day coding Sprint</h4>
                </div>
            </div>
            ))}
            <div className="task-button">
           {!showAllTask ? (
           <button onClick={() => setShowAllTask(true)}>View More</button>
           ):(
           <button onClick={() => setShowAllTask(false)}>Hide Task</button>
           )}
           </div>
        </div>
    );
};

export default Tasks;