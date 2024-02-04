import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import {Button} from "@mui/material";
import { useState } from "react";

function LandForm(){
    let [latitude, setLat] = useState(0);
    let [longitude, setLong] = useState(0);
    return(
        <>
        <div className="grid" style={{gridTemplateColumns: '50% auto', width: "80%", placeSelf:"center"}}>
                <img src="/src/assets/wr2.jpg" alt="Weather being Weather" className="side_card"/>
                    <div style={{alignSelf:"center"}}>          
                        <p>Welcome to TheWeatherReport</p>
                        <p>Please enter your location coordinates: </p>
                        <label htmlFor="latitude">Latitude: 
                        <input type="number" min={-90} max={90} id="latitude" onChange={(e)=> {
                            setLat(Number(e.target.value))
                        }} />
                        </label>
                        <label htmlFor="longitude">Longitude:
                        <input type="number" min={-90} max={90} id="longitude" onChange={(e)=> {
                            setLong(Number(e.target.value))
                        }}  />
                        </label>
                        <button>
                            <a href={`/weather/${latitude}/${longitude}`}>Get Weather Report!</a>
                        </button>
                    </div>
        </div>
        </>
    )
}

export {LandForm}