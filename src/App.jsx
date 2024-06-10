import { useEffect } from "react";
import { useState } from "react";

const Counter = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  useEffect(() => {
    let timer = setInterval(() => {
      setCurrentTime(currentTime)
    }, 1000)
    return clearInterval(timer)
  }, [])
  const formateHour = (hour) => {
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
  }
  const formateHourWithInitialValueZero = (num) => {
    return num < 10 ? `0${num}` : num
  }
  return (

    <>
      <div className="Digital-container">
        <div>
          <h1 className="Header">
            Digital _ Clock
          </h1>
          <div className="Time">
            {formateHourWithInitialValueZero(formateHour(currentTime.getHours()))}
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