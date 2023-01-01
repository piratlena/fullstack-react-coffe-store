import React from "react";
import NavBar from "../components/navBar/NavBar";
import Hero from "../components/hero/Hero";
import AboutUs from "../components/aboutUs/AboutUs";
import Footer from "../components/footer/Footer";
import BestCoffe from "../components/bestCoffe/BestCoffe";

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Hero/>
            <AboutUs/>
            <BestCoffe/>
            <Footer/>
        </div>
    )
}
export default Home;