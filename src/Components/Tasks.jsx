import React, { useState } from "react";


const Tasks = () => {
    const totaldays = 30;

    const daysArray = Array.from({ length: totaldays }, (_, index) => index + 1);

    return(
        <div>
            {daysArray.map((day) => (
                <div  className="day-box" key={day}> 
                  <div className="Task">
                    <h3>Day-{day}</h3>
                    <h4>Day {day} of {totaldays}-Day coding Sprint</h4>
                   </div>
                </div>
            ))}
        </div>
    );
};

export default Tasks;