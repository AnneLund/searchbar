import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Home } from '../Pages/Home'
import Cities from './Cities'
import Hotels from './Hotels/Hotels'
import HotelsByCity from './Hotels/HotelsByCity'
import HotelById from './Hotels/HotelById'
import Destinations from '../Pages/Destinations'
import Reservations from '../Pages/Reservations'
import Rooms from '../Pages/Rooms'

const Router = () => {
  return (
   <Routes>
    <Route index path="/" element={<Home/>} />
    <Route path="/destinations" element={<Destinations/>}/>
    <Route path="/rooms" element={<Rooms/>}/>
    <Route path="/reservations" element={<Reservations/>}/>
    <Route path='/cities' element={<Cities/>}/>
    <Route path='/cities/:id' element={<HotelsByCity/>} /> 
    <Route path='/hotel/:id' element={<HotelById/>} />
   </Routes>
  )
}

export default Router