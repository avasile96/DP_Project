import React from "react"
import { Link } from "react-router-dom";
/*Put paths inside variables, apparently it's good practice*/

// Components
import Nav_b from "../components/Nav_b";
import Footer from "../components/Footer";
import Dash_comp from "../components/dashboard";

const Dsh = () => {
    return (
        <div className="App">
            <Nav_b />
            <Dash_comp />
            <Footer />
        </div>
    );
};

export default Dsh;