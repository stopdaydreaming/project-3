import "./App.css";
import "./assets/output.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Avatar from "./components/Avatar/Avatar";
// import Button from "./components/Button/Button";
// import Card from "./components/Card/Card";
// import NewUsr from "./components/NewUsr/NewUsr";
// import Profile from "./components/Profile/Profile";
// import Radio from "./components/Radio/Radio";
import Landing from "./pages/Landing/Landing";
import Team from "./pages/Team";
import Events from "./pages/Events";
import CreateUser from "./pages/CreateUser";
import CharacterSelect from "./pages/CharacterSelect";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
    <Navbar />
      <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/events" component={Events} />
        <Route exact path ="/create" component = {CreateUser} />
        <Route exact path ="/characters" component = {CharacterSelect} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
