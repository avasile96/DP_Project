import React from "react"

// Components
import Footer from '../components/Footer';
import Tandc from '../components/t_and_c';
import Nav_b from '../components/Nav_b';

const t_and_cond = () => {
    return (
        <div className="App">
            <Nav_b />
            <Tandc />
            <Footer />
        </div>
    )
}

export default t_and_cond;