import React, { useState, useEffect } from "react";
// import CharacterDropdown from "../components/Dropdowns/CharacterDropdown";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import girl from "../assets/Img/girl.jpg";
import avatar from "../assets/Img/avatar_blue.png";
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
  // const characters = [
  //   "bos",
  //   "joe",
  //   "naruto",
  //   "inuyasha",
  //   "sailor moon",
  //   "steven",
  //   "angel"
  // ];

  const history = useHistory();
  function viewProfile(event) {
    event.preventDefault();
    history.push("/profile");
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
    <div class="relative bg-white">
      <div class="lg:absolute lg:inset-0">
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            class="h-56 w-full object-cover lg:absolute lg:h-full"
            src={girl}
            alt="aniPlay girl"
          />
        </div>
      </div>

      <div class="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div class="lg:pr-8">
          <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Welcome to the world of Aniplay!
            </h2>
            <h3 class="mt-4 text-lg text-gray-500 sm:mt-3">
              Create your account.
            </h3>
            <form
              onSubmit={viewProfile}
              class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div class="sm:col-span-2">
                <label
                  htmlFor="email"
                  class="block text-sm font-medium text-gray-700"
                >
                  What's your username?
                </label>
                <div class="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  htmlFor="city"
                  class="block text-sm font-medium text-gray-700"
                >
                  What's your city
                </label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  htmlFor="state"
                  class="block text-sm font-medium text-gray-700"
                >
                  What's your state?
                </label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="state"
                    id="state"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <p>Select your character:</p>
              <br></br>
              <fieldset>
                {/* <legend id="radiogroup-label" class="sr-only">
                  Server size
                </legend> */}
                <ul
                  class="space-y-4"
                  role="radiogroup"
                  aria-labelledby="radiogroup-label"
                >
                 
                  {characters.map((character) => {
                    return                    <li
                    id="radiogroup-option-0"
                    tabIndex="0"
                    role="radio"
                    aria-checked="true"
                    class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500"
                  > <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                      <div class="flex items-center">
                        <div class="text-sm">
                          <p class="font-medium text-gray-900">{character.title}</p>
                          <div class="text-gray-500">
                            <p class="sm:inline">{character.animeography.name}</p>
                            <span
                              class="hidden sm:inline sm:mx-1"
                              aria-hidden="true"
                            ></span>
                          </div>
                        </div>
                      </div>
                      <div class="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
                        <div class="font-medium text-gray-900">
                          <img
                            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                            src={character.image_url} alt="character"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      class="border-indigo-500 absolute inset-0 rounded-lg border-2 pointer-events-none"
                      aria-hidden="true"
                    ></div>
                  </li>



                  })}

                </ul>
              </fieldset>

              <div class="text-right sm:col-span-2">
                <button
                  type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
