import React, { useState } from "react";
import "./App.scss"; // Import CSS file for styling

function App() {
  const [cops, setCops] = useState([
    { name: "John", selectedCity: "", selectedVehicle: "", result: null },
    { name: "Jane", selectedCity: "", selectedVehicle: "", result: null },
    { name: "Jack", selectedCity: "", selectedVehicle: "", result: null },
  ]);

  const cities = [
    { name: "Yapkashnagar", distance: 60 },
    { name: "Lihaspur", distance: 50 },
    { name: "Narmis City", distance: 40 },
    { name: "Shekharvati", distance: 30 },
    { name: "Nuravgram", distance: 20 },
  ];

  const vehicles = [
    { kind: "EV Bike", range: 60, count: 2 },
    { kind: "EV Car", range: 100, count: 1 },
    { kind: "EV SUV", range: 120, count: 1 },
  ];

  const investigate = async cop => {
    // Simulate the API call
    setTimeout(() => {
      const isSuccessful = Math.random() < 0.5; // Simulate success/failure randomly
      cop.result = isSuccessful
        ? `Criminal found! Captured by ${cop.name}`
        : "Criminal not found";
      setCops([...cops]); // Update state to trigger re-render
    }, 1000);
  };

  return (
    <center>
      <div className="body">
        <div className="container">
          <h1 className="title">Catch the Criminal Game</h1>
          {cops.map((cop, index) => (
            <>
              <h2>Cop {cop.name}</h2>
              <div key={index} className="cop-container">
                <div className="item">
                  <label htmlFor={`cities-${index}`}>
                    Select a city to investigate:
                  </label>
                  <select
                    id={`cities-${index}`}
                    value={cop.selectedCity}
                    onChange={e =>
                      setCops(prevCops => {
                        const newCops = [...prevCops];
                        newCops[index].selectedCity = e.target.value;
                        return newCops;
                      })
                    }
                  >
                    <option value="">Select City</option>
                    {cities.map(city => (
                      <option key={city.name} value={city.name}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="vehicle">
                  <label htmlFor={`vehicles-${index}`}>Select a vehicle:</label>
                  <select
                    id={`vehicles-${index}`}
                    value={cop.selectedVehicle}
                    onChange={e =>
                      setCops(prevCops => {
                        const newCops = [...prevCops];
                        newCops[index].selectedVehicle = e.target.value;
                        return newCops;
                      })
                    }
                  >
                    <option value="">Select Vehicle</option>
                    {vehicles.map(vehicle => (
                      <option key={vehicle.kind} value={vehicle.kind}>
                        {vehicle.kind}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="btn">
                <button onClick={() => investigate(cop)}>Investigate</button>
              </div>
              {cop.result && <p>{cop.result}</p>}
            </>
          ))}
        </div>
      </div>
    </center>
  );
}

export default App;
