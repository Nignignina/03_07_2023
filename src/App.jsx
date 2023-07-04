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
        <div className="Play1">
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
        <div className="Play2">
          <div className="column-1 ">C'era una </div>
          <div className="column-1 ">volta un re </div>
          <div className="column-1 ">befè </div>
          <div className="column-1 ">minè </div>
          <div className="column-1 "> fefe</div>
          <div className="column-1 ">sasà </div>
          <div className="column-1 "> un si</div>
          <div className="column-1 ">vulia </div>
          <div className="column-1 "> susere</div>
          <div className="column-1 "> sa se</div>
          <div className="column-1 "> si su sio</div>
          <div className="column-1 ">N </div>
        </div>
      </div>
    </>
  );
}

export default App;
