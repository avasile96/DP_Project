import React from "react"

// Components
import Form_b from '../components/patReg';
import Footer from '../components/Footer';
import Nav_b from '../components/Nav';

const pat_reg = () => {
    return (
        <div className="App">
            <Nav_b />
            <Form_b />
            <Footer />
        </div>
    )
}

export default pat_reg;