import React from "react";

const ParticipantTable = ({ participants }) => {
  return (
    <table className="participant-table">
      <thead>
        <tr>
          <th className="table-header1">Name</th>
          <th className="table-header2">Rank</th>
          <th className="table-header3">Stars</th>
        </tr>
      </thead>
      <tbody>
        {participants.map((participant, index) => (
          <tr key={index}>
            <td className="table-content1">{participant.name}</td>
            <td className="table-content2">{participant.rank}</td>
            <td className="table-content3">{participant.stars}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ParticipantTable;












