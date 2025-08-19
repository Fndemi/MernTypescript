import React from 'react'
import  HomePage from './pages/HomePage/HomePage'
import {useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import { type RootState } from './redux/ReduxStore'
import { type AppDispatch } from './redux/ReduxStore'

const App = () => {
const [displayLogin,setDisplayLogin] = useState<boolean>(true);

const loggedInUser = useSelector((state:RootState) => state.authentication.loggedInUser);





useEffect(()=>{
console.log(loggedInUser)
},[loggedInUser])





  return (
    <div>
    <HomePage displayLogin={displayLogin}  />
    </div>
  )
}

export default App