import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../assets/Img/aaps2.png";
import Event from "../assets/Img/moon.png";

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
    <div className="h-screen relative bg-gray-900 py-16 sm:py-24">
      <div className="mx-auto text-base max-w-prose lg:max-w-none">
      <h2 className="text-2xl text-indigo-500 font-bold tracking-wide uppercase">AniPlay Events</h2>
      <h3 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Discover & Plan Events</h3>
    <br/>
    </div>
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-1/2 h-2/3 bg-indigo-500 bg-opacity-30 rounded-r-3xl lg:right-72"></div>
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
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
                    className="text-yellow-400"
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
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={Event}
                alt=""
              />
              <div className="absolute inset-0 bg-indigo-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90"></div>
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={Event}
                alt=""
              />
              <div className="relative px-8">
                <div>
                  <img
                    className="h-12"
                    src={Logo}
                    alt="Workcation"
                  />
                </div>
                <blockquote className="mt-8">
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                   
                    
                  </div>
                  <footer className="mt-4">
                   
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-sm font-bold text-indigo-500 uppercase tracking-wider"
                        >
                          Event
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-sm font-bold text-indigo-500 uppercase tracking-wider"
                        >
                          Location
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-sm font-bold text-indigo-500 uppercase tracking-wider"
                        >
                          City
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-sm font-bold text-indigo-500 uppercase tracking-wider"
                        >
                          State
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-sm font-bold text-indigo-500 uppercase tracking-wider"
                        >
                          Date
                        </th>

                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Attend</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {events.map((event) => {
                      return <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                          {event.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {event.location}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {event.city}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {event.state}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {event.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a
                            href="/#"
                            className="text-indigo-600 hover:text-indigo-900"
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
