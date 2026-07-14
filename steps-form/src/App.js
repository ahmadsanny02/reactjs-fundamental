import "./index.css";

function App() {
  function handleNext() {
    alert("Next button clicked");
  }

  function handlePrev() {
    alert("Previous button clicked");
  }


  return (
    <div className="steps">
      <div className="numbers">
        <div className="active">1</div>
        <div className="">2</div>
        <div className="">3</div>
      </div>
      <p className="message">Step: Dream</p>
      <div className="buttons">
        <button onClick={handlePrev} style={{ backgroundColor: "#526d82", color: "#fff" }}>
          Prev
        </button>
        <button onClick={handleNext} style={{ backgroundColor: "#526d82", color: "#fff" }}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
