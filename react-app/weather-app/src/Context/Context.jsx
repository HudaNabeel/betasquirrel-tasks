import React, {useReducer, useContext} from "react";

import { Reducer } from "./Reducer";

const WeatherAppContext = React.createContext();

const WeatherAppProvider = ({children})=> {
    const [state, dispatch] = useReducer(Reducer, {
        city: {
            "city": "Delhi", 
            "lat": "28.6100", 
            "lng": "77.2300", 
            "country": "India", 
            "iso2": "IN", 
            "admin_name": "Delhi", 
            "capital": "admin", 
            "population": "32226000", 
            "population_proper": "16753235"
          }, 
        current:'',
        daily:'',

    })

    return(
    <>
      
      <WeatherAppContext.Provider value={{state,dispatch}}>
        {children}
      </WeatherAppContext.Provider>

    </>

)
}
export default WeatherAppProvider;

export const UseWeatherAppContext = ()=>{
    return useContext(WeatherAppContext);
}