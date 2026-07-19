import React from 'react';

function User() {
  const flights = [
    { flightNo: "AI101", from: "Chennai", to: "Delhi", time: "06:00 AM", price: 4500 },
    { flightNo: "6E202", from: "Bangalore", to: "Mumbai", time: "09:30 AM", price: 3800 },
    { flightNo: "SG303", from: "Hyderabad", to: "Kolkata", time: "01:15 PM", price: 5200 },
    { flightNo: "UK404", from: "Delhi", to: "Chennai", time: "05:45 PM", price: 4700 }
  ];

  const bookTicket = (flightNo) => {
    alert(`Ticket booked successfully for flight ${flightNo}`);
  };

  return (
    <div>
      <h2>Welcome! Book Your Flight</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Flight No</th>
            <th>From</th>
            <th>To</th>
            <th>Time</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight, index) => (
            <tr key={index}>
              <td>{flight.flightNo}</td>
              <td>{flight.from}</td>
              <td>{flight.to}</td>
              <td>{flight.time}</td>
              <td>₹{flight.price}</td>
              <td>
                <button onClick={() => bookTicket(flight.flightNo)}>Book</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;