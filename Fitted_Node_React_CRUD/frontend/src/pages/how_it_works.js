import React from "react"

// Components
import Footer from '../components/Footer';
import Howorks from '../components/how_works';
import Nav_b from '../components/Nav_b';

const how_w = () => {
    return (
        <div className="App">
            <Nav_b />
            <Howorks />
            <Footer />
        </div>
    )
}

export default how_w;