import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="card">

        <h1> Counter Application</h1>

        <div className="circle">
          {count}
        </div>

        <div className="buttons">

          <button
            className="plus"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>

          <button
            className="minus"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>

          <button
            className="reset"
            onClick={() => setCount(0)}
          >
            Reset
          </button>

        </div>

      </div>
    </div>
  );
}

export default App;