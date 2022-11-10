
import React, { useState } from "react";

function Slider() {
        const [value, setValue] = useState(8);
    // const value = 8;
    const HandleChange = (event)=>{
        // console.log(event)
        console.log(event.target.value);
        setValue(event.target.value)
        // const value = event.target.value;

    };
  return (
      <div className="slider">
          <input
              type="range"
              min={4}
              max = {32}
              step = {1}
              defaultValue = {value}
              onChange={HandleChange}
          />
          <div className="value"> {value}</div>
      </div>
  );
}

export default Slider
