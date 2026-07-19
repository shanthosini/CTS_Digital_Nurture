import React from 'react';
import './App.css';
import sr from './officespace.jpg';

function App() {

  const office = {
    name: "Prestige Business Park",
    rent: 55000,
    address: "MG Road, Bangalore"
  };

  const officeList = [
    { name: "Tech Tower", rent: 45000, address: "Anna Salai, Chennai" },
    { name: "Skyline Plaza", rent: 72000, address: "Bandra, Mumbai" },
    { name: "Green Valley Complex", rent: 60500, address: "Whitefield, Bangalore" },
    { name: "Urban Hub", rent: 38000, address: "Salt Lake, Kolkata" },
    { name: "Metro Business Center", rent: 81000, address: "Gachibowli, Hyderabad" }
  ];

  return (
    <div className="App">
      {/* Heading element */}
      <h1>Office Space Rental Listings</h1>

      {/* Image attribute */}
      <img
        src={sr}
        alt="Office Space"
        width="400"
      />

      {/* Single office object details */}
      <div className="office-details">
        <h2>Featured Office</h2>
        <p><strong>Name:</strong> {office.name}</p>
        <p>
          <strong>Rent:</strong>{' '}
          <span style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
            ₹{office.rent}
          </span>
        </p>
        <p><strong>Address:</strong> {office.address}</p>
      </div>

      {/* List of office objects */}
      <h2>All Available Offices</h2>
      <ul>
        {officeList.map((item, index) => (
          <li key={index} className="office-item">
            <p><strong>Name:</strong> {item.name}</p>
            <p>
              <strong>Rent:</strong>{' '}
              <span style={{ color: item.rent < 60000 ? 'red' : 'green' }}>
                ₹{item.rent}
              </span>
            </p>
            <p><strong>Address:</strong> {item.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;