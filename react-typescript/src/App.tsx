import React from 'react'
import  HomePage from './pages/HomePage/HomePage'
import {useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import { type RootState } from './redux/ReduxStore'
import { type AppDispatch } from './redux/ReduxStore'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LayoutPage from './pages/LayoutPage/LayoutPage'
const App = () => {

const loggedInUser = useSelector((state:RootState) => state.authentication.loggedInUser);

useEffect(()=>{
console.log(loggedInUser)
},[loggedInUser])


  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<LayoutPage />} />
   <Route path="" element={<HomePage/>}/>
   <Route path='/catalog'element={<>Catalog</>} />
   <Route path='/resource/:barcode' element={<>Resource</>} />
   <Route path='/profile/:userId' element={<>User Profile</>} />
  
   </Routes>
   </BrowserRouter>
  )
}

export default App