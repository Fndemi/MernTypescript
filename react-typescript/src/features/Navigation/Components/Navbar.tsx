import React , {useRef} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import './Navbar.css'
import {useDispatch,useSelector} from 'react-redux'
import {type RootState, type AppDispatch} from '../../../redux/ReduxStore'
import { setDisplayLogin } from '../../../redux/slices/ModalSlice';
export const Navbar:React.FC = () => {

const searchRef = useRef<HTMLInputElement>(null);
const authState = useSelector((state:RootState) => state.authentication);
const navigate = useNavigate();

const dispatch:AppDispatch = useDispatch();

const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter' && searchRef && searchRef.current && searchRef.current.value.length > 0) {
   navigate(`/catalog?barcode=${searchRef.current.value}&title=${searchRef.current.value} &description=${searchRef.current.value}`);
   searchRef.current.value = '';
  }
}

const handleSearchIconClicked = () => {
  if (searchRef && searchRef.current && searchRef.current.value.length > 0) {
    navigate(`/catalog?barcode=${searchRef.current.value}&title=${searchRef.current.value} &description=${searchRef.current.value}`);
    searchRef.current.value = '';
  }

const navigateToProfile = () =>{
  if(authState.loggedInUser) navigate(`/profile/${authState.loggedInUser._id}`);
}

const toggleLogin = () =>{
  dispatch(setDisplayLogin(true))
}





}
return (
  <nav className="navbar">

    </nav>
)



}
