import React, { useState, useEffect } from "react";
// import CharacterDropdown from "../components/Dropdowns/CharacterDropdown";
import { useHistory } from "react-router-dom";
import girl from "../assets/Img/girl.jpg";
// import avatar from "../assets/Img/avatar_blue.png";
import axios from 'axios'

const CreateUser = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // axios get to fetch all events
    // set into state using setEvents
    axios.get("https://api.jikan.moe/v3/top/characters").then((response) => {
      console.log(response)
      setCharacters(response.data.top)
    });
  }, []);

  const history = useHistory();
  
  const chooseCharacter = (e) => {
    e.preventDefault();
    history.push("/characters");

    axios.post("/api/characters")
  }

//   function postUser(event) {
//     event.preventDefault();
//     fetch('/api/users', {
//     method: 'post',
//     body: JSON.stringify(opts)
//   }).then(function(response) {
//     return response.json();
//   })
// }

  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src={girl}
            alt="aniPlay girl"
          />
        </div>
      </div>

      <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:pr-8">
          <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Welcome to the world of Aniplay!
            </h2>
            <h3 className="mt-4 text-lg text-gray-500 sm:mt-3">
              Create your account.
            </h3>
            <form
              onSubmit={chooseCharacter}
              className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  What's your username?
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  What's your city
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700"
                >
                  What's your state?
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="state"
                    id="state"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              {/* <p>Select your character:</p>
              <br></br>
              <fieldset>
                {/* <legend id="radiogroup-label" className="sr-only">
                  Server size
                </legend> */}
                {/* <ul
                  className="space-y-4"
                  role="radiogroup"
                  aria-labelledby="radiogroup-label"
                >
                 
                  {characters.map((character) => {
                    return                    <li
                    id="radiogroup-option-0"
                    tabIndex="0"
                    role="radio"
                    aria-checked="true"
                    className="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500"> 
                    <div className="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <p className="font-medium text-gray-900">{character.title}</p>
                          <div className="text-gray-500">
                            <p className="sm:inline">{character.animeography[0].name}</p>
                            <span
                              className="hidden sm:inline sm:mx-1"
                              aria-hidden="true"
                            ></span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
                        <div className="font-medium text-gray-900">
                          <img
                            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                            src={character.image_url} alt="character"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="border-indigo-500 absolute inset-0 rounded-lg border-2 pointer-events-none"
                      aria-hidden="true"
                    ></div>
                  </li>



                  })}

                </ul> */}
              {/* </fieldset> */} 

              <div className="text-right sm:col-span-2">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ">Choose A Character<i className="fas fa-arrow-alt-right  object-center  inline-block align-middle right text-xl"></i></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
