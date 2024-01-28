import './App.css'
import { useLoaderData } from 'react-router-dom'
import { Navbar } from './components/Navbar';

function App() {
  let weza_repoto = useLoaderData();

  console.log(weza_repoto)

  return(
    <>
    <Navbar/>
    </>
  )
}

export default App
