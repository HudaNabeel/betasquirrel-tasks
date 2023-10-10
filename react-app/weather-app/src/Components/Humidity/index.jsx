
import React from "react";
import { UseWeatherAppContext } from "../../Context/Context";


const Humidity = ()=>{
    let {state:{current, city}}  = UseWeatherAppContext();
    console.log(current, city)
   const uvLevel = (uvLevel) => {
    if (uvLevel <= 2) return 'Low';
    if (uvLevel <= 5) return 'Medium';
    if (uvLevel <= 7) return 'High';
    if (uvLevel > 7) return 'Very High';
   }
    return (
       <>
       {
               
               current  ?       <div className="humidityWrap">
<div className="humidityData">
<div className="title">UV Index </div>
<div className="value">{Math.round(current.uvi)} ({uvLevel(Math.round(current))}) %</div>
</div>


            <div className='humidityData'>
                <div className='title'>WIND </div>
                <div className='value'>{Math.round(current.wind_speed)} km/h</div>
            </div>
            
 
</div> :''

       }
       </>
    )
}


export default Humidity;