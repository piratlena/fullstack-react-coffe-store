import React, { useContext } from "react";
import NavBar from "../components/navBar/NavBar";
import Promo from "../components/promo/Promo";
import { observer} from 'mobx-react-lite';
import { Context } from '../index';
import AboutBeans from "../components/aboutBeans/aboutBeans";
import TypeBar from "../components/typeBar/TypeBar";
import Card from '../components/cards/Cards';
import Footer from "../components/footer/Footer";
import SortProducts from "../components/sortProducts/sortProducts";

const Shop = () => {
    return (
        <>
        <NavBar/>
        <Promo/>
        <AboutBeans/>
        <SortProducts/>
        <Footer/>
        </>     
    )
}

export default Shop;