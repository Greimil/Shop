import React from 'react'
import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import {Shop} from "./Shop"



const Wrapper = () => {
  return (
    <BrowserRouter>
        <Routes>
               
                <Route path='/' element={<Home/>} />
                <Route path='/tienda' element={<Shop/>} />
        


        </Routes>
    </BrowserRouter>
  )
}

export default Wrapper
