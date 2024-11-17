// https://api.openweathermap.org/data/2.5/weather?q=faisalabad&appid=0d9d019a531af37fa784dcb1fc889cea

import React, {useState, useEffect} from 'react'
import "./style.css";
import Weathercard from './Weathercard';

const Temp = () => {
    const [searchValue, setSearchValue] = useState("faisalabad")
    const [tempInfo, setTempInfo] = useState({})

    const getWeatherInfo = async() => {
        try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=0d9d019a531af37fa784dcb1fc889cea`

        const res = await fetch(url)
        const data = await res.json()

            const {temp, pressure, humidity} = data.main;
            const {speed} = data.main;
            const {main: Weathermood} = data.main(0)
            const {country, sunset} = data.sys;
            const {name} = data;

        const myNewWeatherInfo = {
            temp,
            pressure,
            humidity,
            speed,
            Weathermood,
            country,
            sunset,
            name,
        }
        setTempInfo(myNewWeatherInfo);
        } 
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getWeatherInfo();
    }, [])
    
  return (
    <>
    <div className="wrap">
        <div className="search">
            <input type="search" id="search" className='searchTerm' autoFocus placeholder='search...'
            value={searchValue} 
            onChange={(e) => setSearchValue(e.target.value) } />
            <button className="searchButton" type='button' onClick={getWeatherInfo}>Search</button>
        </div>
    </div>
        {/* Our Temp Card */}
        <Weathercard {...tempInfo}/>
    </>
  )
}

export default Temp