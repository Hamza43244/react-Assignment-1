import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0)
  
  const increamentHandler = ()=>{
    setCount(count+1)
  }
  const decreamentHandler = ()=>{
    if(count > 0){

      setCount(count-1)
    }
    else{
      alert("sorry Zero Limit Reached")
      setCount(0)
    }
}
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>{count}</h1>
          <div className="btn_div">
            <button onClick={increamentHandler}>Increament</button>
            <button onClick={decreamentHandler}>Decreament</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
