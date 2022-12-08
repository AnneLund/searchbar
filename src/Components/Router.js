import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Home } from '../Pages/Home'
import Cities from './Cities'
import HotelsByCity from './Hotels/HotelsByCity'
import Hotel from './Hotels/Rooms'
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
    <Route path='/hotel/:id' element={<Hotel/>} />
   </Routes>
  )
}

export default Router