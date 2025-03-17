import React, { useState } from "react";

function Create_Table() {
  const [number, setNumber] = useState("");
  const [table, setTable] = useState([]);

  const generateTable = () => {
    const num = parseFloat(number); // Allows decimal numbers
    if (isNaN(num)) {
      alert("Please enter a valid number!");
      setTable([]);
      return;
    }
    
    if (!Number.isInteger(num)) {
      alert("Decimals are not allowed! Please enter a whole number.");
      setTable([]);
      return;
    }

    const newTable = Array.from({ length: 10 }, (_, i) => num * (i + 1));
    setTable(newTable);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Multiplication Table Generator</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={generateTable}>Generate Table</button>

      {table.length > 0 && (
        <table border="1" style={{ margin: "20px auto", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Multiplication Table of {number}</th>
            </tr>
          </thead>
          <tbody>
            {table.map((value, index) => (
              <tr key={index}>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Create_Table;
