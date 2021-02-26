import React from "react";
import avatar from "../assets/Img/avatar_blue.png";

const CharacterSelect = () => {
  return (
    <div>
      <h1>Character Select Page</h1>
      <p>Select your character:</p>
      <br></br>
      <form
        action="#"
        method="POST"
        class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
      >
        <fieldset>
          {/* <legend id="radiogroup-label" class="sr-only">
                  Server size
                </legend> */}
          <ul
            class="space-y-4"
            role="radiogroup"
            aria-labelledby="radiogroup-label"
          >
            <li
              id="radiogroup-option-0"
              tabindex="0"
              role="radio"
              aria-checked="true"
              class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                <div class="flex items-center">
                  <div class="text-sm">
                    <p class="font-medium text-gray-900">Sailor Moon</p>
                    <div class="text-gray-500">
                      <p class="sm:inline">Sailor Moon</p>
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
                      src={avatar}
                    />
                  </div>
                </div>
              </div>

              <div
                class="border-indigo-500 absolute inset-0 rounded-lg border-2 pointer-events-none"
                aria-hidden="true"
              ></div>
            </li>
            <li
              id="radiogroup-option-1"
              tabindex="-1"
              role="radio"
              aria-checked="false"
              class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                <div class="flex items-center">
                  <div class="text-sm">
                    <p class="font-medium text-gray-900">Inuyasha</p>
                    <div class="text-gray-500">
                      <p class="sm:inline">Inuyasha</p>
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
                      src={avatar}
                    />
                  </div>
                </div>
              </div>

              <div
                class="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none"
                aria-hidden="true"
              ></div>
            </li>
          </ul>
        </fieldset>

        <div class="text-right sm:col-span-2">
          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Complete Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default CharacterSelect;
