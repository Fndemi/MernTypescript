import {Modal} from '../../../../components'
import './LoginRegisterModal.css';
import {useSelector,useDispatch} from 'react-redux';
import { type RootState } from '../../../../redux/ReduxStore';
import { type AppDispatch } from '../../../../redux/ReduxStore';
import { useState,useEffect } from 'react';
import { setDisplayLogin } from '../../../../redux/slices/ModalSlice';
import { LoginForm } from '../LoginForm/LoginForm';
import { RegisterForm } from '../RegisterForm/RegisterForm';

export const LoginRegisterModal: React.FC = () =>{
  const authState = useSelector((state:RootState)=> state.authentication);
  const dispatch:AppDispatch = useDispatch();
  const [login,setLogin] = useState<boolean>(true);

  const closeModal = () =>{
    dispatch(setDisplayLogin(false));

  }
    const toggleLogin = () =>{
   setLogin(!login);
  }
    // Close modal and save user ID when user logs in successfully
  useEffect(() => {
    if (authState.loggedInUser) {
      closeModal();
      // Save user ID to localStorage
      localStorage.setItem('userid', authState.loggedInUser._id);
    }
  }, [authState.loggedInUser]);
   


  return(
   < Modal
   content={login? <LoginForm toggleRegister={toggleLogin}/> : <RegisterForm  toggleLogin={toggleLogin}/>}
   toggleModal={closeModal}
   />
  )

}


