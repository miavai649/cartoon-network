import CharactersList from "./pages/CharactersList"
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Router } from "./Routes/Router"

function App() {

  

  return (
    <div className="App">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  )
}

export default App
