import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BeeMail from "./components/BeeMail/BeeMail";
import Home from "./components/Home/Home";
import BizMap from "./components/BizMap/BizMap";
import SneezeMapContainer from "./components/SneezeMap/SneezeMapContainer";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/beemail" component={BeeMail} />
        <Route path="/sneezemap" component={SneezeMapContainer} />
        <Route path="/bizmap" component={BizMap} />
        {/* Add more routes here as needed */}
      </Switch>
    </Router>
  );
}

export default App;
