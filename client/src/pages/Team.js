import React from "react";
import avatar from "../assets/Img/avatar_blue.png";

const Team = () => {
  return (
    <div class="bg-gray-900">
      <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div class="space-y-12">
          <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 class="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Meet our Family
            </h2>
            <p class="text-xl text-gray-300">
              Welcome to your team page where you can add or delete characters on your team.
            </p>
          </div>
          <ul class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
            <li class="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
              <div class="space-y-6 xl:space-y-10">
                <img
                  class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                  src={avatar}
                  alt=""
                />
                <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
                  <div class="font-medium text-lg leading-6 space-y-1">
                    <h3 class="text-white">Sailor Moon</h3>
                    <p class="text-indigo-400">Sailor Moon Beams</p>
                  </div>

                  <ul class="flex justify-center space-x-5">
                    <li>
                      <a href="#" class="text-gray-400 hover:text-gray-300">
                        <span class="sr-only">Twitter</span>
                        <svg
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-gray-400 hover:text-gray-300">
                      <i class="fas fa-user-plus"><i class="fas fa-user-minus"></i></i>
                        <span class="sr-only">LinkedIn</span>
                        <svg
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path fill-rule="evenodd" d="" clip-rule="evenodd" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
              <div class="space-y-6 xl:space-y-10">
                <img
                  class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                  src={avatar}
                  alt=""
                />
                <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
                  <div class="font-medium text-lg leading-6 space-y-1">
                    <h3 class="text-white">Leonard Krasner</h3>
                    <p class="text-indigo-400">Senior Designer</p>
                  </div>

                  <ul class="flex justify-center space-x-5">
                    <li>
                      <a href="#" class="text-gray-400 hover:text-gray-300">
                        <span class="sr-only">Twitter</span>
                        <svg
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-gray-400 hover:text-gray-300"><i class="fas fa-user-plus"><i class="fas fa-user-minus"></i></i>
                        <span class="sr-only">LinkedIn</span>
                        <svg
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d=""
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
              <div class="space-y-6 xl:space-y-10">
                <img
                  class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                  src={avatar}
                  alt=""
                />
                <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
                  <div class="font-medium text-lg leading-6 space-y-1">
                    <h3 class="text-white">Leonard Krasner</h3>
                    <p class="text-indigo-400">Senior Designer</p>
                  </div>

                  <ul class="flex justify-center space-x-5">
                    <li>
                      <a href="#" class="text-gray-400 hover:text-gray-300"><i class="fas fa-user-plus padding"></i><i class="fas fa-user-minus"></i>
                        <span class="sr-only">Twitter</span>
                        <svg
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-gray-400 hover:text-gray-300">
                        <span class="sr-only">LinkedIn</span>
                        <svg
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d=""
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <hr />
          <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 class="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Add a Character
            </h2>
            <p class="text-xl text-gray-300">
              Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet
              lectus sit pretium egestas vel mattis neque.
            </p>
          </div>
          <ul></ul>
        </div>
      </div>
    </div>
  );
};

export default Team;
