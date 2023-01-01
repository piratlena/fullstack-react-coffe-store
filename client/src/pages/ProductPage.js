import React from "react";
import ProductCard from "../components/productCard/ProductCard";
import Promo from '../components/promo/Promo';
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";

const ProductPage = () => {
    return (
        <div>
            <NavBar/>
            <Promo/>
            <ProductCard/>
            <Footer/>
        </div>
    )
}
export default ProductPage;