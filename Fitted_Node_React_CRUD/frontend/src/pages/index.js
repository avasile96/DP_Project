import React from "react"
import { Link } from "react-router-dom";
/*Put paths inside variables, apparently it's good practice*/

// Components
import Nav_b from "../components/Nav_b";
import Footer from "../components/Footer";
import Hero_b from "../components/Hero_b";

const MainPage = () => {
    return (
        <div className="App">
            <Nav_b />
            <Hero_b />
            <Footer />
        </div>
    );
};

export default MainPage;