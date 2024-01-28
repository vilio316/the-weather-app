import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { LandForm } from './components/LandForm.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { updateWeather } from './api_loaders/loaders.js'

const routes = createBrowserRouter([
{
  path: `/weather/:lat/:long`, loader: ({params})=> {
    return updateWeather(params.lat, params.long)
  },
  element: <App/>
},
{
  path: '/', element: <LandForm/>
}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
