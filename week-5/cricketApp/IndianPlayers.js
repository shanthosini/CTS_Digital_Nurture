import React from 'react';

function IndianPlayers() {
  // Destructuring - Odd and Even team players
  const oddTeamPlayers = ["Rohit Sharma", "KL Rahul", "Rishabh Pant", "Jadeja", "Bumrah"];
  const evenTeamPlayers = ["Virat Kohli", "Shreyas Iyer", "Hardik Pandya", "Shami", "Kuldeep"];

  const [player1, player2, player3] = oddTeamPlayers;
  const [playerA, playerB, playerC] = evenTeamPlayers;

  // Merge feature - combining T20 and Ranji Trophy players
  const T20players = ["Rohit Sharma", "Virat Kohli", "Hardik Pandya"];
  const RanjiTrophyPlayers = ["Prithvi Shaw", "Mayank Agarwal", "Shubman Gill"];

  const allTeamPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Indian Players</h2>

      <h3>Odd Team Players (Destructured)</h3>
      <p>{player1}, {player2}, {player3}</p>

      <h3>Even Team Players (Destructured)</h3>
      <p>{playerA}, {playerB}, {playerC}</p>

      <h3>Merged T20 and Ranji Trophy Players</h3>
      <ul>
        {allTeamPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;