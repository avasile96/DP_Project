import React from "react"

// Components
import Form_b from '../components/Form_b.js';
import Footer from '../components/Footer.js';
import Nav_b from '../components/Nav.js';

const reg = () => {
    return (
        <div className="App">
            <Nav_b />
            <Form_b />
            <Footer />
        </div>
    )
}

export default reg;