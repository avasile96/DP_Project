import React from "react"

// Components
import Form_b from '../components/patUp';
import Footer from '../components/Footer';
import Nav_b from '../components/Nav_b';

const pat_up = () => {
    return (
        <div className="App">
            <Nav_b />
            <Form_b />
            <Footer />
        </div>
    )
}

export default pat_up;