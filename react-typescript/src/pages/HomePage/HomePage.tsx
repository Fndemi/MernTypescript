import {LoginForm} from '../../features/authentication/components/LoginForm/LoginForm';
import  {type RootState} from '../../redux/ReduxStore';
import {useSelector} from 'react-redux';


export default function HomePage() {


const displayLogin = useSelector((state:RootState) => state.modal.displayLogin);
  
  return(
    <div className="page">
   Home page
 { displayLogin ? <LoginForm />  : <></> }
    </div>
  )
}