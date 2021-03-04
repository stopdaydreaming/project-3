import React, { useState, useEffect } from "react";
// import avatar from "../assets/Img/avatar_blue.png";
import axios from "axios";
import {useHistory} from 'react-router-dom'
// import Cloud from import Logo from "../assets/Img/ap.png";


// {characters.map((character) => {
//   return
// })}
const CharacterSelect = (props) => {


  const postNewUserData = (mainCharacter) => {
    const username= props.username;
    const city= props.city;
    const state= props.state;
    console.log({ username, city, state, mainCharacter } )
    axios
      .post("/api/users", { username, city, state, mainCharacter })
      .then((response) => {
        console.log(response);
        props.setUserId(response.data._id);
        props.setCurrentUser(response.data);

        // alert("Profile created!");
        history.push("/profile");
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });

    console.log("save user info");
  };

  const history = useHistory();
  function characterChosen() {
    //console.log("This is the selected user: " )
    

  //   title: { type: String, required: true },
  // name: { type: String, required: true },
  // photo:

  var myCharacter = {
    title: selectedCharacter.title,
    name: selectedCharacter.animeography[0].name,
    photo: selectedCharacter.image_url,
  }
  //console.log(myCharacter);

  postNewUserData(myCharacter)
  
  
 

  // userId = "603ffdcadd1b1cd7376d28fa";

  // var myUserData = {
  //   username: "test",
  //   city: "Atlanta",
  //   state: "Georgia",
  //   mainCharacter: myCharacter
  // }

    // axios.put("/api/users/" + userId, myCharacter).then((response => {
    //   console.log(response);

      //console.log(myCharacter);

    // }))


  }

  const [characters, setCharacters] = useState([]);
  const [userId2, setUserId2] = useState("");

  const [selectedCharacter, setSelectedCharacter] = useState({})

  function myFunction(c) {
    console.log(c)
    setSelectedCharacter(c);
  }
  
  useEffect(() => {
    // axios get to fetch all events
    // setUserId2(userId)
    // set into state using setEvents
    axios.get("https://api.jikan.moe/v3/top/characters").then((response) => {
      console.log(response);
      setCharacters(response.data.top);
    });
  }, []);


  return (
    <div className="bg-hero bg-fixed ...">
    <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
      <div className="space-y-8 sm:space-y-12">
        <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          <h2 className="text-5xl font-extrabold tracking-tight ">Choose Your Character</h2>
          <p className="text-xl text-gray-500">Choose from the list of characters below then click on Complete Profile.</p>
        </div>
        <button type="button" onClick={characterChosen} className="inline-flex items-center px-6 py-4  border border-transparent shadow-sm text-xl leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ">Complete Profile   <i className=" right fad fa-user-visor"></i></button>
      <div
        action="#"
        method="POST"
        className="">
              <ul className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-5">
                {characters.map((character) => {
                  return (
                    <li>
                      <div className="space-y-6">
                        <img
                          className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                          src={character.image_url}
                          alt=""
                        />
                        <div className="space-y-2">
                          <div className="text-xs font-medium lg:text-sm">
                            <h3>{character.title}</h3>
                            <p className="text-indigo-600 truncate">{character.animeography[0].name}</p>
                          </div>
                        </div>
                        <button
                  type="submit"
                  onClick={() => {myFunction(character)}}
                  className="min-w-full inline-flex justify-center py-2 px-2 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 break-words hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Select<i className="right break-words fas fa-wand-magic"></i></button>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
       </div>
      </div>
         
  );
};
export default CharacterSelect;