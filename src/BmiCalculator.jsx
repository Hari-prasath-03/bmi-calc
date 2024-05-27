import { useState } from "react";
import "./app.css";

function BmiCalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [BMI, setBMI] = useState(null);
  const [status, setStatus] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function calculateBMI() {
    if (height && weight) {
      const heightInM = height / 100;
      const bmi = weight / (heightInM * heightInM);
      setBMI(bmi.toFixed(2));
      if (bmi < 18.5) {
        setStatus("Under Weight");
      } else if (bmi >= 18.5 && bmi < 25) {
        setStatus("Normal Weight");
      } else if (bmi >= 25 && bmi < 30) {
        setStatus("Over Weight");
      } else {
        setStatus("Obese");
      }
      setErrorMsg("");
    } else {
      setBMI(null);
      setStatus("");
      setErrorMsg(
        "Pleae enter any valid number for height and weight. Don't leave any field Empty."
      );
    }
  }

  function clearAll() {
    setHeight("");
    setWeight("");
    setBMI(null);
    setStatus("");
    setErrorMsg("");
  }

  return (
    <>
      <div className="container">
        <div className="image-container"></div>
        <div className="form-container">
          <h1>BMI CALCULATOR</h1>
          <div className="err-msg">{errorMsg}</div>
          <div className="input-group">
            <label htmlFor="height">Height in cm:</label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => {
                setHeight(e.target.value);
              }}
            />
          </div>
          <div className="input-group">
            <label htmlFor="weight">Weight in kg:</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
              }}
            />
          </div>
          <div className="btn-group">
            <button className="calc-btn" onClick={calculateBMI}>
              Calculate BMI
            </button>
            <button className="clr-btn" onClick={clearAll}>
              Clear
            </button>
          </div>
          {BMI !== null && (
            <div className="result">
              <p>Your BMI is : {BMI}</p>
              <p>Status : {status}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default BmiCalculator;
