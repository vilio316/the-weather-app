function WeatherCard(props){
    let weather_forecast = props.entry.daily;
    console.log(weather_forecast)
  
   return(
      <>
      <div className="grid two_cols">
        <div>
        <img src="/src/assets/wr1.jpg" style={{width: "90%"}}/>
       </div>
        <div className="grid" style={{gridTemplateColumns:"auto auto"}}>
        {weather_forecast.map((cast)=><div className="grid" key={`cook_${weather_forecast.indexOf(cast)}`}>
            <p>{Math.floor(Number(cast.feels_like.day) - 273)}<sup>o</sup> C</p>
            <p></p>
        </div>
        )}
        </div>
      </div>
    
      </>  
    )
  }

  export {WeatherCard}