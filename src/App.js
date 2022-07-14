import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(18);
  const increment = () => {
    if (count === 30) {
      return;
    }
    setCount(count + 1);
  };
  const decrement = () => {
    if (count === 16) {
      return;
    }

    setCount(count - 1);
  };

  return (
    <div className="App">
      <div className="circle">{count}</div>
      <div className="button-div">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}

export default App;
