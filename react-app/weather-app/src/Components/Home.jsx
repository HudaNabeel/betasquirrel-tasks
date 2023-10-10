import React from "react";
import ChooseState from "./ChooseState";
import WeekInfo from "./WeekInfo";
import Humidity from "./Humidity";
import Left from "./Left";



const Home = () => {

    return (

        <>
        
<div className="homewrap">
    <div className="weathersection">
         <Left />

       <div className="rightside">
        <ChooseState />
        <WeekInfo />   <br />
        < Humidity />
       </div>
    </div>
      


</div>

        </>
    )
}

export default Home;