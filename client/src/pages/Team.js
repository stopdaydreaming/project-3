import React from "react";

//characters
import avatar from "../assets/Img/avatar_blue.png";
import sailor from "../assets/Img/sms.jpg";
import naruto from "../assets/Img/naruto_profile.jpg";
import inuyasha from "../assets/Img/inuyasha.jpg";
import deku from "../assets/Img/deku.jpg";
import tanjiro from "../assets/Img/tanjiro.jpeg";
import onepiece from "../assets/Img/one_piece.jpg";

const Team = () => {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Available Teams
            </h2>
            <p className="text-xl text-gray-300">
              Welcome to your team page where you can join or leave a team.
            </p>
            <button
              type="button"
              className="mt-3 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Back to Profile
            </button>
          </div>
          <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
            <li className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
              <div className="space-y-6 xl:space-y-10">
                <img
                  className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                  src={sailor}
                  alt="sailor moon"
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
                        className="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                        className="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                  alt="naruto"
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
                        className="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                        className="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                  src={deku}
                  alt="deku"
                />
                <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                  <div className="font-medium text-lg leading-6 space-y-1">
                    <h3 className="text-white">Deku</h3>
                    <p className="text-indigo-400">Team Almight</p>
                  </div>

                  <ul className="flex justify-center space-x-5">
                    <li>
                      <button
                        type="button"
                        className="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                        className="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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

          <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
            <li className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
              <div className="space-y-6 xl:space-y-10">
                <img
                  className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                  src={onepiece}
                  alt="one piece"
                />
                <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                  <div className="font-medium text-lg leading-6 space-y-1">
                    <h3 className="text-white">One Piece</h3>
                    <p className="text-indigo-400">Odas Proportions</p>
                  </div>

                  <ul className="flex justify-center space-x-5">
                    <li>
                      <button
                        type="button"
                        className="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                        className="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                  src={tanjiro}
                  alt="tanjiro"
                />
                <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                  <div className="font-medium text-lg leading-6 space-y-1">
                    <h3 className="text-white">Tanjiro</h3>
                    <p className="text-indigo-400">Kimetsu No Yaiba</p>
                  </div>

                  <ul className="flex justify-center space-x-5">
                    <li>
                      <button
                        type="button"
                        className="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                        className="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                        className="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                        className="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
        </div>
      </div>
    </div>
  );
};

export default Team;
