import React from "react";
import './authForm.module.scss';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';
import { NavLink, useLocation } from "react-router-dom";


const AuthForm = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)
 return (
    
    <div className="container">
        <div className="modal">
        <h1 className="modal__title">Welcome</h1>
        <h2 className="modal__subtitle">{isLogin ? "AUTHORIZATION" : "Sign up"}</h2>
        <form className="modal__form">
            
            <div className="modal__group">
                <input type="text" id="email" name="email" 
               placeholder="Email*"/>
            </div>

            <div className="modal__group">
                <input type="text" id="password" name="password" 
               placeholder="Password*"/>
            </div>
            
       
            <button type="submit" className="btn btn__login">Login</button>
            <div className="modal__auth">
             {isLogin ? <div>Not a member? <NavLink to={REGISTRATION_ROUTE}>Create your account</NavLink></div>
                        :
            <div>
                Already have an account? <NavLink to={LOGIN_ROUTE}>Sign in</NavLink>
            </div>
            }
             </div>
        </form>
        </div>
    </div>
 
 )
}
export default AuthForm;