import React from "react"

// Components
import Form from '../components/Form';
import Footer from '../components/Footer';
import Nav_b from '../components/Nav';

const login = () => {
    return (
        <div className="App">
            <Nav_b />
            <Form />
            <Footer />
        </div>
    )
}

export default login;
