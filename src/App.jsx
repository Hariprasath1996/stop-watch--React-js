import { useEffect } from "react";
import { useState } from "react";

const Counter = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  // component created for time 
  useEffect(() => {
    let timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])


  //  component created for ... if  time , seconds , minutes  below 10 , its comes including with initial value of zero ex-> "01,02,03...10,11,12"...
  const formatHourWithInitialValueZero = (num) => {
    return num < 10 ? `0${num}` : num
  }

  // component created for that time  as railway time to normal 
  const formatHour = (hour) => {
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
  }

  // component created for Day , month, year
  const formatDate = (date) => {
    const dayFormateOptions = {weekday:"long",  year:"numeric",  month:"long", day:"numeric"}
    return date.toLocaleDateString(undefined,dayFormateOptions)
  };

  return (

    <>
      <div className="Digital-container">
        <div>
          <h1 className="Header">
            Digital _ Clock
          </h1>
          <div className="Time">
            {formatHourWithInitialValueZero(formatHour(currentTime.getHours()))} :  {formatHourWithInitialValueZero(currentTime.getMinutes())} : {formatHourWithInitialValueZero(currentTime.getSeconds())}  
            {currentTime.getHours() >= 12 ? " PM" : " AM"}
          </div>
          <div className="Date">
            {formatDate(currentTime)}
          </div>
        </div>

      </div>

    </>
  );
}

export default
  Counter;