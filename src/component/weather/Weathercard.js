import React, {useState, useEffect} from 'react'

const Weathercard = ( {
    temp, 
    humidity, 
    pressure,
    Weathermood,
    name,
    speed,
    country,
    sunset,
} ) => {
    const [weatherState, setWeatherSate] = useState("")

    useEffect(() => {
        if (Weathermood) {
            switch (Weathermood) {
                case "Clouds":
                    setWeatherSate("wi-day-cloudy")
                    break;
                case "Haze":
                    setWeatherSate("wi-fog")
                    break;
                case "Clear":
                    setWeatherSate("wi-day-sunny")
                    break;
                case "Mist":
                    setWeatherSate("wi-dust")
                    break;
            
                default:
                    setWeatherSate("wi-day-sunny")
                    break;
            }
        }
    }, [Weathermood])
    

    // converting the seconds in to time
    let sec = sunset;
    let date = new Date(sec*1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`

  return (
    <>
     <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">{Weathermood}</div>
                        <div className="place">{name}, {country}</div>
                    </div>
                </div>
                <div className="date"> {new Date().toLocaleString()} </div>

                  {/* Our 4 column section */}
            <div className="extra-temp">
                <div className="temp-info-minmax">
                    <div className="two-sided-section">
                        <p><i className={"wi wi-sunset"} ></i></p>
                        <p className='extra-info-leftside'>
                           {timeStr} <br />
                           sunset
                        </p>
                    </div>
                    <div className="two-sided-section">
                        <p><i className={"wi wi-humidity"} ></i></p>
                        <p className='extra-info-leftside'>
                            {humidity} <br />
                            humidity
                        </p>
                    </div>
                </div>

                <div className="extra-temp">
                <div className="two-sided-section">
                        <p><i className={"wi wi-rain"} ></i></p>
                        <p className='extra-info-leftside'>
                            {pressure} <br />
                            pressure
                        </p>
                    </div>
                    <div className="two-sided-section">
                        <p><i className={"wi wi-strong-wind"} ></i></p>
                        <p className='extra-info-leftside'>
                            {speed} <br />
                            speed
                        </p>
                    </div>
                </div>
            </div>
            </article>
    </>
  )
}

export default Weathercard