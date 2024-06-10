import { useState } from "react";

const Counter = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  return (

    <>
      <div className="Digital-container">
        <div>
          <h1 className="Header">
            Digital _ Clock
          </h1>
          <div className="Time">
            01 : 01 : 00 AM
          </div>
          <div className="Date">
            Monday , June  10 , 2024
          </div>
        </div>

      </div>

    </>
  );
}

export default
  Counter;