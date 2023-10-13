import React, {useEffect, useState} from "react";
import Graph from "./graph"
import ParticipantTable from "./table";
import { TextAlignment } from "pdf-lib";

const Leaderboard = () => {
    const [showAllParticipants, setShowAllParticipants] = useState(false);
    const [topUsers, setTopUsers] = useState(["user2","user1","user3"]);
   

    const participants = [
        { name: "Participant 1", rank: 1,  stars: 5 },
        { name: "Participant 2", rank: 2,  stars: 4 },
        { name: "Participant 3", rank: 3,  stars: 4 },
        { name: "Participant 4", rank: 4,  stars: 3 },
        { name: "Participant 5", rank: 5,  stars: 3 },
        { name: "Participant 6", rank: 6,  stars: 2 },
        { name: "Participant 7", rank: 7,  stars: 2 },
    ];
      
    const top5Participants = participants.slice(0, 5);

    return(
        <div>
            <h3>Leaderboard</h3>
            <hr></hr>
            <img src="bar.png"></img>
            <div className="first_part">
                <Graph topUsers={topUsers}/>
                <hr></hr>
            </div>
            <div className="second_part">
            <ParticipantTable participants={showAllParticipants ? participants : top5Participants}/>
            <div className="leaderboard-button">
            {!showAllParticipants ? (
            <button onClick={() => setShowAllParticipants(true)}>
                View Leaderboard 
            </button>
            ):(
            <button onClick={() => setShowAllParticipants(false)}>
                Hide
            </button>
            )}
            </div>
            </div>
        </div>
    );
};

export default Leaderboard;