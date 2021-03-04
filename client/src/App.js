import "./App.css";
import "./assets/output.css";
import axios from 'axios';

import React, {useState, useEffect} from 'react';
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
import AllTeams from "./pages/AllTeams";

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


const location = {
  pathname: "/"
};
function App() {
  // set state for currentUser
  const [currentUser, setCurrentUser] = useState(sampleUser);

  const [username, setUsername] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [userId, setUserId] = useState("");

  // const postNewUserData = (mainCharacter) => {
  //   console.log({ username, city, state, mainCharacter } )
  //   axios
  //     .post("/api/users", { username, city, state, mainCharacter })
  //     .then((response) => {
  //       console.log(response);
  //       setUserId(response.data._id);
  //       currentUser(response.data);

  //       alert("Profile created!");
  //     })
  //     .catch((err) => {
  //       if (err) {
  //         console.log(err);
  //       }
  //     });

  //   console.log("save user info");
  // };

  useEffect(() => {
    // const currentUser = sampleUser;

  })

  

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" 
            render={() => <Landing setUserData={setCurrentUser} />}
            />
          <Route exact path="/team" component={Team} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/create" 
            render={() => <CreateUser 
              setUsername={setUsername}
              setCity={setCity}
              setState={setState}
              setUserId={setUserId}
              setUserData={setCurrentUser}
              username={username}
              city={city}
              state={state}
              userId={userId}
               />}
           />
          <Route exact path="/characters" 
            render={() => <CharacterSelect
              setUserId={setUserId}
              setCurrentUser={setCurrentUser}
              username={username}
              city={city}
              state={state}
              userId={userId}
               />}
            />
          <Route exact path="/allteams" component={AllTeams} />
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
