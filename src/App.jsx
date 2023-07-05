import { useState } from "react";

import "./App.css";
import "./App.scss";
import Buttons from "./Components/Buttons/Buttons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <div className="Play1">
          play with design sistem
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

        <div className="Play3 ">
          <h2>Block 2 </h2>
          <div className="Play3_Buttons">
            <div className="column-2">
              <Buttons label="go to" icon fill />
            </div>
            <div className="column-2">
              <Buttons label="don't go" icon iconLeft />
            </div>
            <div className="column-2">
              <Buttons label="submit" icon outline fill />
            </div>
            <div className="column-2">
              <Buttons label="discover" icon text />
            </div>
            <div className="column-2">
              <Buttons label="go to" icon />
            </div>
            <div className="column-2">
              <Buttons label="" icon square />
            </div>
          </div>
        </div>
        {/* <div className="Play2">
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
        </div> */}
      </div>
    </>
  );
}

export default App;
