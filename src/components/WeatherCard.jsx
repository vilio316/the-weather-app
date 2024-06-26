import { Air, GridOff, WaterDropRounded, WindPower } from "@mui/icons-material";
import { Grid } from "@mui/material";
import PublicIcon from '@mui/icons-material/Public';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import CloudIcon from '@mui/icons-material/Cloud';
import weatherShot2 from '../assets/wr1.jpg'
import { useParams } from "react-router-dom";

export const makeDate = (timestamp) => {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  let upgraded_stamp = timestamp * 1000
  let dateOut = new Date(upgraded_stamp)
  return `${days[dateOut.getDay()]}, ${dateOut.getDate()} ${months[dateOut.getMonth()]}`
}
export const floor =(temp)=>{
  return Math.floor(temp)
}
export const percent = (figure)=>{
  return Math.floor(Number(figure) * 100)
}
export const toKmH = (speed) =>{
  return Math.floor((Number(speed)) * 3.6)
}
function WeatherCard(props){
  let {lat, long} = useParams()
  let weather_data = props.entry;
  console.log(weather_data)
  let weather_forecast = props.entry.daily;
    console.log(weather_forecast)

   
  
   return(
      <Grid container spacing={1.5}>
      <Grid item xs={12} sm={12} md={4} lg={3}>
        <img src={weatherShot2} alt="Side Shot" style={{width: "90%", borderRadius:"1.5rem"}} xs={12} sm={4} md={4} lg={6} />
       </Grid>
       <Grid item style={{padding: "0.25rem 1rem"}} xs={12} sm={12} md={8} lg={9}>
      <p style={{display: "block", margin: "1.5rem", textAlign:"center"}}>
        <span className="important_text">
          <span className="icon"><DeviceThermostatIcon/></span>
          {floor(weather_data.current.temp)}<sup>o</sup>C
          </span>


       <span className="important_text">
        <span className="icon"><PublicIcon color={"success"}/> </span>
        {weather_data.timezone}
        </span> 
        
       <span className="important_text" style={{textTransform: "capitalize"}}>
        <span className="icon">
        <CloudIcon color={"primary"}/>
        </span>
        {weather_data.current.weather[0].description} 
        </span>
       </p>
        <Grid container spacing={1} justifyContent={"center"}>
        {weather_forecast.map((cast)=><Grid item xs={12} sm={4} md={3} alignContent="center" justifyContent={"center"} key={cast.dt} className="w_card"> 
        <a href={`/weather_day/${lat}/${long}/${weather_forecast.indexOf(cast)}`} className="container">
            <p className="important_text">{makeDate(cast.dt)}</p>
              <span className="temp_bold">{floor(cast.feels_like.day)} <sup>o</sup>C</span>
                <span className="feels">Max|Min : 
                {floor(cast.temp.max)}<sup>o</sup> | 
                {floor(cast.temp.min)}<sup>o</sup> 
                </span>
                <p>Feels like:{floor(cast.feels_like.day)}<sup>o</sup></p>
                <div className="grid three_cols">
                <span className="weather_detail">
                  <span className="icon_small" title="Chance of Rain">
                    <WaterDropRounded/>
                  </span>
                  {percent(cast.pop)}%</span>

                <span className="weather_detail">
                  <span className="icon_small" title="Chance of Rain">
                    <Air/>
                  </span>
                  {toKmH(cast.wind_speed)}km/h</span>

                <span className="weather_detail">
                  <span className="icon_small" title="Chance of Rain">
                    <WindPower/>
                  </span>
                  {toKmH(cast.wind_gust)}km/h</span>

                  </div>
                </a>
        </Grid>
        )}
       </Grid>
       </Grid>
       
       </Grid>
    )
  }

  export {WeatherCard}