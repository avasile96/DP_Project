import React from "react"

// Components
import Footer from '../components/Footer';
import Abt from '../components/abtUs';
import Hero_b from "../components/Hero";
import Nav_b from '../components/Nav';

const aboutus = () => {
    return (
        <div className="App">
            <Nav_b />
            <Abt />
            <Footer />
        </div>
    )
}

export default aboutus;