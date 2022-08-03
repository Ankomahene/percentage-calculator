import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [percentNumber, setPercentNumber] = useState<number>(20);
  const [actualNumber, setActualNumber] = useState<number>(70);
  const [results, setResults] = useState(0);

  const handleCalculation = () => {
    setResults(calculate());
  };

  useEffect(() => {
    setResults(calculate());

    // eslint-disable-next-line
  }, []);

  const calculate = (): number => {
    return (percentNumber / 100) * actualNumber;
  };

  return (
    <div className="App">
      <div className="container">
        <div className="info">
          <div className="title">Percentage Calculator</div>
          <div className="description">Calculate Percentages for free</div>
        </div>
        <hr />
        <div className="main">
          <div>What is</div>
          <input
            type="number"
            value={percentNumber}
            onChange={(e) => setPercentNumber(Number(e.target.value))}
          />
          <div>% of</div>
          <input
            type="number"
            value={actualNumber}
            onChange={(e) => setActualNumber(Number(e.target.value))}
          />
          <div>?</div>
        </div>
        <div className="results">= {results}</div>
        <button className="calculateBtn" onClick={handleCalculation}>
          Calculate
        </button>
      </div>
    </div>
  );
}

export default App;
