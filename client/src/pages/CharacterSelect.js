import React, { useState, useEffect } from "react";
import avatar from "../assets/Img/avatar_blue.png";
import axios from "axios";

// {characters.map((character) => {
//   return
// })}

const CharacterSelect = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // axios get to fetch all events
    // set into state using setEvents
    axios.get("https://api.jikan.moe/v3/top/characters").then((response) => {
      console.log(response);
      setCharacters(response.data.top);
    });
  }, []);
  return (
    <div>
      <h1>Character Select Page</h1>
      <p>Select your character:</p>
      <br></br>
      <form
        action="#"
        method="POST"
        class="mt-9 grid grid-cols-3 grid-flow-col gap-y-6 sm:grid-cols-2 sm:gap-x-8"
      >

              </div>
              <ul class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
                {characters.map((character) => {
                  return (
                    <li>
                      <div class="space-y-4">
                        <img
                          class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                          src={character.image_url}
                          alt=""
                        />
                        <div class="space-y-2">
                          <div class="text-xs font-medium lg:text-sm">
                            <h3>{character.title}</h3>
                            <p class="text-indigo-600">{character.animeography[0].name}</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CharacterSelect;
