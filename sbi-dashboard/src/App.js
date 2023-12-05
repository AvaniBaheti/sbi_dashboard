import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [quarter, setQuarter] = useState("Q1");
  const [stats, setStats] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/stats/${quarter}`
        );
        setStats(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [quarter]);

  return (
    <div>
      <nav className="navbar">
        <h1>SBI Dashboard</h1>
      </nav>

      <div className="select-container">
        <label>Select Quarter: </label>
        <select onChange={(e) => setQuarter(e.target.value)}>
          <option value="Q1">Quarter 1</option>
          <option value="Q2">Quarter 2</option>
          <option value="Q3">Quarter 3</option>
          <option value="Q4">Quarter 4</option>
        </select>
      </div>
      <div className="dashboard">
        <div className="tile">
          <h2>Revenue</h2>
          <p>{stats.Revenue}</p>
        </div>

        <div className="tile">
          <h2>Net Income</h2>
          <p>{stats.NetIncome}</p>
        </div>

        <div className="tile">
          <h2>Net Profit</h2>
          <p>{stats.NetProfit}</p>
        </div>

        <div className="tile">
          <h2>Operating Income</h2>
          <p>{stats.OperatingIncome}</p>
        </div>
      </div>
    </div>
  );
}

export default App;