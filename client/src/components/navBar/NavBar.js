import { Link } from 'react-router-dom'
import './navBar.module.scss';
import logoTwoGrains from '../../assets/img/logo_two-grains.svg';
import Cart from '../../assets/img/cart.svg';
import User from '../../assets/img/user.svg';
import Like from '../../assets/img/like.svg'
const NavBar = () => {

    return (
        <header className='header'>
            <div className="header__wrapper">
            <div className="container">
            <Link to="/">
            <div className="header__info">
            <div className="header__menu">
           <img src={logoTwoGrains} className="header__logo" alt='logo'></img>
            <nav className='header__nav'>
                <ul className='header__list'>
                    <li className='header__list-item'><a href="#" className='header__link'>Coffee house</a></li>
                    <li className='header__list-item'><a href="#" className='header__link'>Our coffee</a></li>
                    <li className='header__list-item'><a href="#" className='header__link'>For your pleasure</a></li>
                </ul>
            </nav>
           </div>

            <ul className="header__cart">
             <li className="header__cart-box">
             <img src={Cart} alt="user_icon" />
             </li>
              <li>1205 руб.</li>
              <li><img src={Like} alt="user_icon" /></li>
            <li><img src={User} alt="user_icon" /></li>
          </ul>
            </div>
            </Link>
           </div>
            </div>
        </header>
    )

}
export default NavBar;