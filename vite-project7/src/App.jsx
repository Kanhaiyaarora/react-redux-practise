import React from 'react'
import { createBrowserRouter } from "react-router"
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"
import Product from "./Pages/Product.jsx"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/product",
    element: <Product />
  },
])

const App = () => {


  return (
    <div></div>
  )
}

export default App
