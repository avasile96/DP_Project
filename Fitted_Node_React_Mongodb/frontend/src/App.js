//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Form from './components/Form';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Form />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
