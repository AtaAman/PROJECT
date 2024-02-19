import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from "./components/Home/Home"
import Services from "./components/Services/Services"
import Galary from "./components/Galary/Galary"
import Contact from "./components/Contact/Contact"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: "",
        element: <Home />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/galary",
        element: <Galary />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
