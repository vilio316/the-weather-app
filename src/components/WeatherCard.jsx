import { GridOff } from "@mui/icons-material";
import { Grid } from "@mui/material";

function WeatherCard(props){
  let weather_data = props.entry;
  console.log(weather_data)
  let weather_forecast = props.entry.daily;
    console.log(weather_forecast)

    const floor =(temp)=>{
      return Math.floor(temp)
    }
    const percent = (figure)=>{
      return Number(figure) * 100
    }
    const toKmH = (speed) =>{
      return Math.floor((Number(speed)) * 3.6)
    }

   return(
      <Grid container spacing={1.5}>
      <Grid item alignItems={"center"} xs={12} sm={12} md={4} lg={3}>
        <img src="/src/assets/wr1.jpg" alt="Side Shot" style={{width: "90%", borderRadius:"1.5rem"}} xs={12} sm={4} md={4} lg={6} />
       </Grid>
       <Grid item style={{padding: "0.25rem 1rem"}} xs={12} sm={12} md={8} lg={9}>
      <p style={{display: "block", margin: "1.5rem", textAlign:"center"}}>
        <span className="important_text">{floor(weather_data.current.temp)}<sup>o</sup>C</span>
       <span className="important_text">{weather_data.timezone}</span> 
       <span className="important_text" style={{textTransform: "capitalize"}}>{weather_data.current.weather[0].description} </span>
       </p>
        <Grid container spacing={2}>
        {weather_forecast.map((cast)=><Grid item xs={12} sm={4} md={3} alignContent="center" key={cast.dt}>
        <a href="/" className="container" key={`cook_${weather_forecast.indexOf(cast)}`}>
              <span className="temp_bold">{floor(cast.feels_like.day)} <sup>o</sup>C</span>
                Max|Min : <span>{floor(cast.temp.max)}</span><sup>o</sup> | <span>{floor(cast.temp.min)}</span><sup>o</sup>
                <p>Feels like:{floor(cast.feels_like.day)}<sup>o</sup></p>
                <span>{percent(cast.pop)}%</span>
                <span>{toKmH(cast.wind_speed)}km/h</span>
                <span>{toKmH(cast.wind_gust)}km/h</span>
                </a>
        </Grid>
        )}
       </Grid>
       </Grid>
       
       </Grid>
    )
  }

  export {WeatherCard}