import { useLoaderData } from 'react-router-dom'
import {WeatherCard} from './components/WeatherCard'


function App() {
  let weza_repoto = useLoaderData();

  return(
    <>
      <WeatherCard entry={weza_repoto}/>
      </>
  )
}

export default App
