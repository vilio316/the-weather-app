import { useLoaderData } from 'react-router-dom'
import { Navbar } from './components/Navbar';
import {WeatherCard} from './components/WeatherCard'


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
