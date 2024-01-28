import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { updateWeather } from './api_loaders/loaders.js'

const routes = createBrowserRouter([
{
  path: "/", loader: ()=> {
    return updateWeather(33.34, -94.04)
  },
  element: <App/>
}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
