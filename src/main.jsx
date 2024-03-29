import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { LandForm } from './components/LandForm.jsx'
import Error from './components/Error.jsx'
import WeatherCardByDay from './components/WeatherCardByDay.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { updateWeather, weatherByDay } from './api_loaders/loaders.js'
import { Navbar } from './components/Navbar.jsx'

const routes = createBrowserRouter([
{
  path: `/weather/:lat/:long`, loader: ({params})=> {
    return updateWeather(params.lat, params.long)
  },
  element: <App/>,
  errorElement: <Error/>
},
{
path: '/weather_day/:lat/:long/:index',
loader: ({params})=> {
  return weatherByDay(params.lat, params.long, params.index)
},
element: <WeatherCardByDay/>,
errorElement: <Error/>
},
{
  path: '/', element: <LandForm/>,  errorElement: <Error/>
}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
