import "./App.css";
import "./assets/output.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Avatar from "./components/Avatar/Avatar";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import NewUsr from "./components/NewUsr/NewUsr";
import Profile from "./components/Profile/Profile";
import Radio from "./components/Radio/Radio";
import Landing from "./Pages/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Team from "./Pages/Team";
import Events from "./Pages/Events";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route exact path="/" component={Landing} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/events" component={Events} />
      </Router>
    </div>
  );
}

export default App;
