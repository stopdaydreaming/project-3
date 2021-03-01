import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../assets/Img/aaps2.png";
import Event from "../assets/Img/cos.jpg";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // axios get to fetch all events
    // set into state using setEvents
    axios.get("/api/events").then((response) => {
      console.log(response)
      setEvents(response.data)
    });
  }, []);

  return (
    <div class="relative bg-white py-16 sm:py-24">
      <div class="mx-auto text-base max-w-prose lg:max-w-none">
      <h2 class="text-2xl text-indigo-600 font-semibold tracking-wide uppercase">AniPlay Events</h2>
      <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight underline text-gray-900 sm:text-4xl">Discover & Plan Events</h3>
    <br/>
    </div>
      <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div class="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div class="absolute inset-y-0 right-1/2 w-full bg-purple-100 rounded-r-3xl lg:right-72"></div>
            <svg
              class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width="404"
              height="392"
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-indigo-500"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="392"
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            <div class="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
              <img
                class="absolute inset-0 h-full w-full object-cover"
                src={Event}
                alt=""
              />
              <div class="absolute inset-0 bg-indigo-500"></div>
              <div class="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90"></div>
              <img
                class="absolute inset-0 h-full w-full object-cover"
                src={Event}
                alt=""
              />
              <div class="relative px-8">
                <div>
                  <img
                    class="h-12"
                    src={Logo}
                    alt="Workcation"
                  />
                </div>
                <blockquote class="mt-8">
                  <div class="relative text-lg font-medium text-white md:flex-grow">
                   
                    
                  </div>
                  <footer class="mt-4">
                   
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-sm font-bold text-indigo-500 uppercase tracking-wider"
                        >
                          Event
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-sm font-bold text-indigo-500 uppercase tracking-wider"
                        >
                          Location
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-sm font-bold text-indigo-500 uppercase tracking-wider"
                        >
                          City
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-sm font-bold text-indigo-500 uppercase tracking-wider"
                        >
                          State
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-sm font-bold text-indigo-500 uppercase tracking-wider"
                        >
                          Date
                        </th>

                        <th scope="col" class="relative px-6 py-3">
                          <span class="sr-only">Attend</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                    {events.map((event) => {
                      return <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                          {event.name}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {event.location}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {event.city}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {event.state}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {event.date}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a
                            href="#"
                            class="text-indigo-600 hover:text-indigo-900"
                          >
                            Attend
                          </a>
                        </td>
                      </tr>
                    })}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
