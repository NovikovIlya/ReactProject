import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import CarDetail from './screens/home/car-detail/CarDetail'
import CarItem from './screens/home/car-item/CarItem'
import Home from './screens/home/Home'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<CarItem/>} path='person/:id'/>

            <Route  path='*' element={<div>Not found</div>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router