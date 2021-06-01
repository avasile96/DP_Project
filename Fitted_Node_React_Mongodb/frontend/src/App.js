//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Form from './components/Form';
import Form_b from './components/Form_b';
import Footer from './components/Footer';
import Nav_b from './components/Nav_b';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Nav_b />
                <Form_b />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
