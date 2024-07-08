import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloudSun, faCloudSunRain, faWater, faCloudShowersHeavy, faMagnifyingGlass, faWind } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake } from '@fortawesome/free-regular-svg-icons';
import './App.css';


const WeatherDeatails=()=>{
  return( <>
  <div className="faSun">
      <FontAwesomeIcon icon={faSun} 
      beat style={{ color: "#f7b23b" 
      }} alt="sun" />
    </div>
    </>)
}
function App() {
  
  return (
    <>
     <div className="container">
      <div className="input-container">
        <input type="text"
        className="cityInput" 
        placeholder="Search City" />

        <div className="faMagnifyingGlass">
        <FontAwesomeIcon icon={faMagnifyingGlass} 
        alt="Search" />

        </div>


      </div>
      <WeatherDeatails />
     </div>

    {/* <FontAwesomeIcon icon={faSun} beat style={{ color: "#f7b23b" }} />
      <FontAwesomeIcon icon={faCloudSun} />
      <FontAwesomeIcon icon={faCloudSunRain} />
      <FontAwesomeIcon icon={faWater} />
      <FontAwesomeIcon icon={faCloudShowersHeavy} />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <FontAwesomeIcon icon={faSnowflake} />
      <FontAwesomeIcon icon={faWind} />*/}

    </>
  )
}

export default App;
