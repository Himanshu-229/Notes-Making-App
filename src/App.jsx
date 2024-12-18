import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Notes from './Pages/Notes'
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
