import React from 'react';

function ListofPlayers() {
  const players = [
    { name: "Rohit Sharma", score: 85 },
    { name: "Virat Kohli", score: 92 },
    { name: "KL Rahul", score: 45 },
    { name: "Shreyas Iyer", score: 60 },
    { name: "Rishabh Pant", score: 78 },
    { name: "Hardik Pandya", score: 55 },
    { name: "Ravindra Jadeja", score: 40 },
    { name: "Axar Patel", score: 30 },
    { name: "Jasprit Bumrah", score: 15 },
    { name: "Mohammed Shami", score: 10 },
    { name: "Kuldeep Yadav", score: 20 }
  ];

  // Display all players using map()
  const allPlayers = players.map((player, index) => (
    <li key={index}>{player.name} - {player.score}</li>
  ));

  // Filter players with score below 70 using arrow function
  const lowScorePlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>
      <ul>{allPlayers}</ul>

      <h3>Players with Score Below 70</h3>
      <ul>
        {lowScorePlayers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;