import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import {Button} from "@mui/material";
import { useState } from "react";
import weatherShot from '../assets/wr2.jpg'

function LandForm(){
    let [latitude, setLat] = useState(0);
    let [longitude, setLong] = useState(0);
    return(
        <>
        <div className="grid two" style={{width: "90%", placeSelf:"center"}}>
                <img src={weatherShot} alt="Weather being Weather" className="side_card"/>
                    <div style={{alignSelf:"center", padding:"0.25rem 0.75rem"}}>          
                        <p style={{fontWeight: "bold",fontSize:"2rem" }}>Welcome to TheWeatherReport</p>
                        <p > Please enter your location coordinates: </p>
                        <label htmlFor="latitude">Latitude: 
                        <input type="number" placeholder="0" min={-90} max={90} id="latitude" onChange={(e)=> {
                            setLat(Number(e.target.value))
                        }} />
                        </label>
                        <label htmlFor="longitude">Longitude:
                        <input type="number" placeholder="0"  min={-90} max={90} id="longitude" onChange={(e)=> {
                            setLong(Number(e.target.value))
                        }}  />
                        </label>
                        <button style={{
                            backgroundColor:"blue",
                            borderRadius: "1.5rem",
                            padding: "0.75rem"

                        }}>
                            <a href={`/weather/${latitude}/${longitude}`} style={{textDecoration: "none", color:"white"}}>Get Weather Report!</a>
                        </button>
                    </div>
        </div>
        </>
    )
}

export {LandForm}