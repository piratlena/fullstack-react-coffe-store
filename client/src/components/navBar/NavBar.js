import React, { useContext } from "react";
import './navBar.module.scss';
import logoTwoGrains from '../../assets/img/logo_two-grains.svg';
import Cart from '../../assets/img/cart.svg';
import Like from '../../assets/img/like.svg';
import { Context } from "../../index";
import { NavLink } from "react-router-dom";
import { HOME_ROUTE, SHOP_ROUTE, LOGIN_ROUTE } from "../../utils/consts";
const NavBar = () => {
const {user} = useContext(Context)
    return (
        <header className='header'>
            <div className="header__wrapper">
            <div className="container">
            <div className="header__info">
            <div className="header__menu">
           <img src={logoTwoGrains} className="header__logo" alt='logo'></img>
            <nav className='header__nav'>
                <div className='header__list'>
                    <NavLink to={HOME_ROUTE}><div className='header__list-item'>Coffee house</div></NavLink>
                    <NavLink to={SHOP_ROUTE}><div className='header__list-item'>Our coffee</div></NavLink>
                    
                    <div className='header__list-item'><a href="#" className='header__link'>For your pleasure</a></div>
                </div>
            </nav>
           </div>

            <div className="header__cart">
             <div className="header__cart-box">
             <img src={Cart} alt="cart" />
             </div>
              <div className="header__cart-item">1205 руб.</div>
              <div className="header__cart-item"><img src={Like} alt="like" /></div>
              {user.isAuth ? 
              <NavLink to={LOGIN_ROUTE}><div className="header__cart-item">Log out</div></NavLink>
               :
               <NavLink to={LOGIN_ROUTE}><div className="header__cart-item">Log in</div></NavLink>
              }
              
          </div>
            </div>
           </div>
            </div>
        </header>
    )

}
export default NavBar;