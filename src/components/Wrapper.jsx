import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home'


export const Wrapper = () => {
  return (
    <HashRouter>
        <Routes>

                <Route path='/' element={<Home/>} />
                <Route path='/products' element={<Products/>} />
        


        </Routes>
    </HashRouter>
  )
}
