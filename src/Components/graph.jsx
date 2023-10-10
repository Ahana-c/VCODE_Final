import React from "react";

const Graph = ({topUsers}) => {

    return(
        <div>
            <p>{topUsers.map((user, index) => `${user}${index < 2 ? ', ' : ''}`)}</p>
        </div>
    );
}; 

export default Graph;