import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import MyContext from "../Context/Context";
const MIN_PASSWORD_LENGHT = 5;
const MIN_USERNAME_LENGTH = 3;

const Login = () => {
    const { login, setLogin } = useContext(MyContext)
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(true)
    const handleLoginInputsChange = ({ target }) => {
        const { name } = target;
        
        const value = target.type === 'checkbox' ? target.checked : target.value;
        if (name === 'userName') setLogin({
            ...login,
            userName: value
        });
        if (name === 'password') setLogin({
            ...login,
            password: value
        });
        const userNameValidation = login.userName.length >= MIN_USERNAME_LENGTH;
        const passwordValidation = login.password.length >= MIN_PASSWORD_LENGHT;
        userNameValidation & passwordValidation ? setDisabled(false) : setDisabled(true);
      };

      const handleLoginButton = () => {
            navigate('/home')
      }
   
     
    return(
            <section>
                <h1> Login to Your Account </h1>
                <input 
                    type='text'
                    placeholder="User Name"
                    name="userName"
                    onChange={ handleLoginInputsChange}>
                </input>
                <input
                    type='password'
                    placeholder="Password"
                    name="password"
                    onChange={ handleLoginInputsChange }>
                </input>
                <label htmlFor="RememberMe">
                    Remember me
                <input type='radio' id="RememberMe"></input>
                </label>
                <button disabled={ disabled } onClick={ handleLoginButton }> Login to Your Account </button>
                <p> Not a member yet? <a href="google.com">Register now</a> </p>
            </section> 
        )
};


export default Login;