import { useLoaderData } from "react-router-dom";
import { makeDate, floor, toKmH, percent} from "./WeatherCard";
import { Navbar } from "./Navbar";

export default function WeatherCardByDay(){
    let result = useLoaderData();

    const makeTime = (timestamp) => {
        let date = new Date(timestamp * 1000)
        return `${date.getHours()}:${date.getMinutes()}`
    }

    return(
        <>
        <Navbar/>
        <p className="important_text">
            {makeDate(result.dt)}
        </p>
        <p>
            <span style={{padding:"0 0.25rem"}}>Day: {floor(result.temp.day)}<sup>o</sup></span>
            <span style={{padding:"0 0.25rem"}} >Night: {floor(result.temp.night)}<sup>o</sup></span>
        </p>
        <span style={{fontSize: "3.5rem"}}>{floor(result.feels_like.day)}<sup>o</sup></span>
        <p></p>
        <div>
            <header>
                <h2><u>Details</u></h2>
                <p>Wind Speed : {toKmH(result.wind_speed)}km/h</p>
                <p>Chance of Rain: {percent(result.pop)}% </p>
                <p>Humidity: {result.humidity}% </p>
                <p>Sunrise/ Sunset: {makeTime(result.sunrise)} / {makeTime(result.sunset)}</p>
                <p>Moonrise/ Moonset: {makeTime(result.moonrise)} / {makeTime(result.moonset)}</p>
            </header>
        </div>
        </>
    )
}