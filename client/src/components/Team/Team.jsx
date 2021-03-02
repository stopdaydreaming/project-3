// import React, { Component } from 'react';

class Team extends Component {
  render() {
    return (
      <div className="bg-gray-900">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                Meet our team
              </h2>
              <p className="text-xl text-gray-300">
                Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet
                lectus sit pretium egestas vel mattis neque.
              </p>
            </div>
            <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
              <li className="py-10 px-6 bg-indigo-500 text-center rounded-lg xl:px-10 xl:text-left">
                <div className="space-y-6 xl:space-y-10">
                  <img
                    className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                    src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixqx=uPE37qrihf&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                    alt=""
                  />
                  <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3 className="text-white">Leonard Krasner</h3>
                      <p className="text-indigo-400">Senior Designer</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
