import { useState } from "react";
import "./index.css";

function App() {
  const [step, setStep] = useState(1);

  function handleNext() {
    if (step < 3) setStep(step + 1);
    console.log(step);
  }

  function handlePrev() {
    if (step > 1) setStep(step - 1);
    console.log(step)
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step === 1 ? "active" : ""}>1</div>
        <div className={step === 2 ? "active" : ""}>2</div>
        <div className={step === 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">Step: Dream</p>
      <div className="buttons">
        <button
          onClick={handlePrev}
          style={{ backgroundColor: "#526d82", color: "#fff" }}
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          style={{ backgroundColor: "#526d82", color: "#fff" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
