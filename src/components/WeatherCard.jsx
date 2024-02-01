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
      <Grid container justifySelf={"center"} spacing={1.5}>
        <Grid item sx={12} md={4} lg={3} alignContent={"center"}>
        <img src="/src/assets/wr1.jpg" style={{width: "100%", borderRadius: "1.25rem"}}/>
        </Grid>
       <Grid item sx={12} md={8} lg={9} style={{padding: "0.25rem 1rem"}}>
      <p style={{display: "block", margin: "1.5rem"}}>
        <span className="important_text">{floor(weather_data.current.temp)}<sup>o</sup>C</span>
       <span className="important_text">{weather_data.timezone}</span> 
       <span className="important_text" style={{textTransform: "capitalize"}}>{weather_data.current.weather[0].description} </span>
       </p>
        <Grid container spacing={2} justifyItems={"center"}>
        {weather_forecast.map((cast)=><Grid item xs={12} md={4} lg={2}>
        <a href="/" className="container" key={`cook_${weather_forecast.indexOf(cast)}`}>
              <span className="temp_bold">{floor(cast.feels_like.day)} <sup>o</sup>C</span>
                Max|Min : <span>{floor(cast.temp.max)}</span><sup>o</sup> | <span>{floor(cast.temp.min)}</span><sup>o</sup>
                <p>Feels like:{floor(cast.feels_like.day)}<sup>o</sup></p>
                <span>
                  {percent(cast.pop)}%
                </span>
                <span>
                  {toKmH(cast.wind_speed)}km/h
                </span>
                <span>
                {toKmH(cast.wind_gust)}km/h
                </span>
                </a>
        </Grid>
        )}
       </Grid>
       </Grid>
       </Grid>
    )
  }

  export {WeatherCard}