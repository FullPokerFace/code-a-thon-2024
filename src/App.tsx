import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BeeMail from "./components/BeeMail/BeeMail";
import Home from "./components/Home/Home";
import SneezeMap from "./components/SneezeMap/SneezeMap";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/beemail" component={BeeMail} />
        <Route path="/sneezemap" component={SneezeMap} />
        {/* <Route path="/business-heatmap" component={BusinessHeatmapPage} /> */}
        {/* Add more routes here as needed */}
      </Switch>
    </Router>
  );
}

export default App;
