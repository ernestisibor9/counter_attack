import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"

import { Provider } from 'react-redux'
import store from './redux/store.js'

function App() {
  return (
      <BrowserRouter>
      <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App
