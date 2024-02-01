function WeatherCard(props){
  let weather_data = props.entry;
  console.log(weather_data)
  let weather_forecast = props.entry.daily;
    console.log(weather_forecast)

    const floor =(temp)=>{
      return Math.floor(temp)
    }
   return(
      <>
      <div className="grid two_cols">
        <div>
        <img src="/src/assets/wr1.jpg" style={{width: "90%"}}/>
       </div>
       <div>
      <p><sup>o</sup> C</p> <span>{weather_data.current.weather[0].main}</span>
       <p>
       <p>{weather_data.timezone}</p> 
       <span style={{textTransform: "capitalize"}}>{weather_data.current.weather[0].description} </span>
       </p>
        <div className="grid" style={{gridTemplateColumns:"auto auto"}}>
        {weather_forecast.map((cast)=><div className="grid" key={`cook_${weather_forecast.indexOf(cast)}`}>
            <p><span className="temp_bold">{floor(cast.feels_like.day)}</span> <sup>o</sup> C
                <span>{floor(cast.temp.max)}</span> | <span>{floor(cast.temp.min)}</span>
            
            </p>
            <p></p>
        </div>
        )}
        </div>
        </div>
      </div>
    
      </>  
    )
  }

  export {WeatherCard}