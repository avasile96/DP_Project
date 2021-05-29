/*import logo from './logo.svg';*/
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Nav />
            <Switch>
                <Route path = "/" exact compoent = {Home} />
                <Route path = "/tweets" exact compoent = {Tweet} />
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Router>
  );
}

export default App;
