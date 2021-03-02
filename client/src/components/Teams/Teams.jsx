import React, { Component } from 'react';
import TeamsPic from "./../../assets/Img/sms.jpg";

class Teams extends Component {
    render() {
        return (

<div class="bg-lime-400">
  <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
      <div class="space-y-5 sm:space-y-4">
        <h2 class="text-3xl font-extrabold tracking-tight text-indigo-500 md:text-4xl">AniPlay Teams</h2>
        <p class="text-xl text-gray-500">Discover all that AniPlay has to offer with AniPlay Teams. View all Teams created by members like you.</p>
      </div>
      <div class="lg:col-span-2 ">
        <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
          <li>
            <div class="space-y-4">
              <div class="aspect-w-3 aspect-h-2 ">
                <img class="object-cover shadow-lg rounded-lg" src={TeamsPic} alt=""/>
              </div>
              <div class="text-lg leading-6 font-medium space-y-1">
                <h3>Sailor Moon Beams</h3>
                <p class="text-indigo-600">Sailor Moon Lady</p>
              </div>
              <div class="text-lg">
                <p class="text-gray-500">A team totally like absolutely obsessed with all things Sailor Moon</p>
              </div>

              <ul class="flex space-x-5 ">
                <li>
                <button type="button" class="flex   px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">View Team</button>
                </li>
             
              </ul>
            </div>
          </li>

        </ul>
        <br></br>
        <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
          <li>
            <div class="space-y-4">
              <div class="aspect-w-3 aspect-h-2">
                <img class="object-cover shadow-lg rounded-lg" src={TeamsPic} alt=""/>
              </div>
              <div class="text-lg leading-6 font-medium space-y-1">
                <h3>Sailor Moon Beams</h3>
                <p class="text-indigo-600">Sailor Moon Lady</p>
              </div>
              <div class="text-lg">
                <p class="text-gray-500">A team totally like absolutely obsessed with all things Sailor Moon</p>
              </div>

              <ul class="flex space-x-5 items-center">
                <li>
                <button type="button" class="flex  items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">View Team</button>
                </li>
             
              </ul>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </div>
</div>

        );
    }
}

export default Teams;