import React from "react";

const Graph = ({topUsers}) => {

    return(
        <div className="graph">
            <p>{topUsers.map((user) => 
            <div className="user-graph">
                {user}
            </div>)}</p>
        </div>
    );
}; 

export default Graph;