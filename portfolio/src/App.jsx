import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WebLayout from './layouts/WebLayout'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element = { <WebLayout/> }>
              <Route path='/' element = { <Home />} />
              <Route path='/about' element = { <About />} />
              <Route path='/contact' element = { <Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
