import "./App.css";
import "./assets/output.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProfilePic from "./assets/Img/sms.jpg";

// import Avatar from "./components/Avatar/Avatar";
// import Button from "./components/Button/Button";
// import Card from "./components/Card/Card";
// import NewUsr from "./components/NewUsr/NewUsr";
// import Profile from "./components/Profile/Profile";
// import Radio from "./components/Radio/Radio";
import Landing from "./pages/Landing";
import Team from "./pages/Team";
// import Teams from "./components/Teams/Teams";
import Events from "./pages/Events";
import CreateUser from "./pages/CreateUser";
import CharacterSelect from "./pages/CharacterSelect";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";

// dummy data
const sampleUser = {
  username: "moonlady",
  profileImage: ProfilePic,
  mainCharacter: {
    title: "MoonLaDY",
    name: "Sailor Moon",
    photo: ProfilePic
  },
  city: "Atlanta",
  state: "Georgia"
};

// set state for currentUser
// const [currentUser, setCurrentUser] = useState(sampleUser);
const currentUser = sampleUser;

const location = {
  pathname: "/"
};
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/create" component={CreateUser} />
          <Route exact path="/characters" component={CharacterSelect} />
          <Route
            path="/profile"
            render={() => <Profile currentUser={currentUser} />}
          />
          {/* <Route exact path="/profile" component={Profile} /> */}
        </Switch>
        <Footer />
      </Router>
      {/* { !== "/" && <Footer/>} */}
    </div>
  );
}

export default App;
