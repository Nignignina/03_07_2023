import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <div className="block_1">
          <h2> block 1</h2>
          <div className="rectangular_1"> </div>
          <div className="rectangular_2"> </div>
          <div className="rectangular_3"> </div>
        </div>

        <div className="block_2">
          <h2> block 1</h2>
          <div className="circle_1"> </div>
          <div className="circle_2"> </div>
          <div className="circle_3"> </div>
        </div>
      </div>
    </>
  );
}

export default App;
