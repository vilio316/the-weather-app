import { useLoaderData } from "react-router-dom";

export default function WeatherCardByDay(){
    let result = useLoaderData();
    console.log(result)
}