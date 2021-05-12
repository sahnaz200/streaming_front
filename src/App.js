import logo from './logo.svg';
import './App.css';
import Home from './Home'
import NavBar from './NavBar'
import Player from './Player'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/play/:filename" exact component={Player} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
