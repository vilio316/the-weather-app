import { useLoaderData } from 'react-router-dom'
import {WeatherCard} from './components/WeatherCard'
import { Navbar } from './components/Navbar';


function App() {
  let weza_repoto = useLoaderData();

  return(
    <>
    <Navbar/>
      <WeatherCard entry={weza_repoto}/>
      </>
  )
}

export default App
