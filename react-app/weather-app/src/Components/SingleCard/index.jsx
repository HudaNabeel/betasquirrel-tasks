
import React from "react";
import dayjs from 'dayjs';


const SingleCard = ({item, className, onclick})=>{

    const WEEKDAYS = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
    const weekdayindex = dayjs.unix(item.dt).day()


    return (
        <>
       <li key={item.moonrise} className="{}" onClick={onclick}>
       <img className="day-icon"  alt="huda"
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                        />

                        <span className="day-name">
                            {WEEKDAYS[weekdayindex].slice(0,3)}

                        </span>

                        <span className="day-temp">
                            {Math.round(item.temp.max)} <sup>o</sup>C

                        </span>

        
       </li>


        </>
    )
}


export default SingleCard;