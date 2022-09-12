import './login.css';
import {Link} from 'react-router-dom';
import { useContext, useRef, useState} from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';
function Login() {
  const userRef = useRef(null);
  const passwordRef = useRef(null);
  const {dispatch, isFetching} = useContext(Context);
  const [error, setError] = useState(false);
const handleSubmit = async (e) => {
   e.preventDefault();
   dispatch({type: 'LOGIN_START'});
   setError(false);
   try {
     const res =  await axios.post('/auth/login',{
        username: userRef.current.value,
        password: passwordRef.current.value
     });
     dispatch({type: 'LOGIN_SUCCESS' , payload: res.data});
   } catch (err) {
     dispatch({type: 'LOGIN_FAILURE'});
     setError(true);
   }
};

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="loginInput" type="text" placeholder="Enter your username..." ref={userRef} required />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..."  ref={passwordRef} required />
        <button className="loginButton" type="submit" >Login</button>
      </form>
        <button className="loginRegisterButton">
        <Link className="link" to ="/register">REGISTER</Link>
        </button>
        {error && <span style={{color:"red", marginTop:"10px"}}>Wrong credentials!!!</span>}
    </div>
  )
}

export default Login