import React from "react";

//characters
import avatar from "../assets/Img/avatar_blue.png";
import sailor from "../assets/Img/sms.jpg";
import naruto from "../assets/Img/naruto_profile.jpg";
import inuyasha from "../assets/Img/inuyasha.jpg";

const Team = () => {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Meet our Family
            </h2>
            <p className="text-xl text-gray-300">
              Welcome to your team page where you can add or delete characters
              on your team.
            </p>
          </div>
          <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
            <li className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
              <div className="space-y-6 xl:space-y-10">
                <img
                  className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                  src={sailor}
                  alt=""
                />
                <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                  <div className="font-medium text-lg leading-6 space-y-1">
                    <h3 className="text-white">Sailor Moon</h3>
                    <p className="text-indigo-400">Sailor Moon Beams</p>
                  </div>

                  <ul className="flex justify-center space-x-5">
                    <li>
                      <button
                        type="button"
                        class="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <i className="fas fa-user-plus fa-md"></i>
                        <svg
                          className=""
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="" />
                        </svg>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <i className="fas fa-user-minus"></i>
                        <svg
                          className=""
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path fillRule="evenodd" d="" clipRule="evenodd" />
                        </svg>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
              <div className="space-y-6 xl:space-y-10">
                <img
                  className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                  src={naruto}
                  alt=""
                />
                <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                  <div className="font-medium text-lg leading-6 space-y-1">
                    <h3 className="text-white">Naruto</h3>
                    <p className="text-indigo-400">Shonen Jump</p>
                  </div>

                  <ul className="flex justify-center space-x-5">
                    <li>
                      <button
                        type="button"
                        class="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <i className="fas fa-user-plus fa-md"></i>
                        <svg
                          className=""
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="" />
                        </svg>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <i className="fas fa-user-minus"></i>
                        <svg
                          className=""
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path fillRule="evenodd" d="" clipRule="evenodd" />
                        </svg>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
              <div className="space-y-6 xl:space-y-10">
                <img
                  className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                  src={inuyasha}
                  alt=""
                />
                <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                  <div className="font-medium text-lg leading-6 space-y-1">
                    <h3 className="text-white">Inuyasha</h3>
                    <p className="text-indigo-400">Kagome Girls</p>
                  </div>

                  <ul className="flex justify-center space-x-5">
                    <li>
                      <button
                        type="button"
                        class="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <i className="fas fa-user-plus fa-md"></i>
                        <svg
                          className=""
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="" />
                        </svg>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <i className="fas fa-user-minus"></i>
                        <svg
                          className=""
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path fillRule="evenodd" d="" clipRule="evenodd" />
                        </svg>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <hr />
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Add a Character
            </h2>
            <p className="text-xl text-gray-300">
              Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet
              lectus sit pretium egestas vel mattis neque.
            </p>
          </div>
          <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
            <li className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
              <div className="space-y-6 xl:space-y-10">
                <img
                  className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                  src={avatar}
                  alt=""
                />
                <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                  <div className="font-medium text-lg leading-6 space-y-1">
                    <h3 className="text-white">Sailor Moon</h3>
                    <p className="text-indigo-400">Sailor Moon Beams</p>
                  </div>

                  <ul className="flex justify-center space-x-5">
                    <li>
                      <button
                        type="button"
                        class="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <i className="fas fa-user-plus fa-md"></i>
                        <svg
                          className=""
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="" />
                        </svg>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <i className="fas fa-user-minus"></i>
                        <svg
                          className=""
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path fillRule="evenodd" d="" clipRule="evenodd" />
                        </svg>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* <li className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
              <div className="space-y-6 xl:space-y-10">
                <img
                  className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                  src={avatar}
                  alt=""
                />
                <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                  <div className="font-medium text-lg leading-6 space-y-1">
                    <h3 className="text-white">Leonard Krasner</h3>
                    <p className="text-indigo-400">Senior Designer</p>
                  </div>

                  <ul className="flex justify-center space-x-5">
                    <li>
                      <a href="#" className="text-gray-400 hover:text-gray-300">
                        <i className="fas fa-user-plus"></i>
                        <span className="sr-only">Twitter</span>
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-gray-300">
                        <i className="fas fa-user-minus"></i>
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path fillRule="evenodd" d="" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li> */}
            {/* <li className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
              <div className="space-y-6 xl:space-y-10">
                <img
                  className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                  src={avatar}
                  alt=""
                />
                <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                  <div className="font-medium text-lg leading-6 space-y-1">
                    <h3 className="text-white">Leonard Krasner</h3>
                    <p className="text-indigo-400">Senior Designer</p>
                  </div>

                  <ul className="flex justify-center space-x-5">
                    <li> */}
            {/* <a href="#" className="text-gray-400 hover:text-gray-300">
                        <i className="fas fa-user-plus text-lg padding "></i>
                        <span className="sr-only">Twitter</span>
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-gray-300">
                        <i className="fas fa-user-minus"></i>
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path fillRule="evenodd" d="" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Team;
