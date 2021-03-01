import React, { Component } from 'react';
import ProfilePic from "./../../assets/Img/sms.jpg";
class Profile extends Component {
  render() {
    return (

<div class="bg-white overflow-hidden">
  <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div class="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
    <div class="mx-auto text-base max-w-prose lg:max-w-none">
      <h2 class="text-2xl text-indigo-600 font-semibold tracking-wide uppercase">AniPlayer Profile</h2>
      <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight underline text-gray-900 sm:text-4xl">Meet Kimbella69</h3>
    </div>
    <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
      <div class="relative lg:row-start-1 lg:col-start-2">
        <svg class="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
          <defs>
            <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-indigo-500" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
        </svg>
        <div class="relative text-base mx-auto max-w-prose lg:max-w-none">
          <figure>
            <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
              <img class="rounded-lg shadow-lg object-cover object-center" src={ProfilePic} alt="User Profile pic" />
            </div>
            
          </figure>
        </div>
      </div>
      <div class="mt-8 lg:mt-0">
      
<div class="bg-white shadow overflow-hidden sm:rounded-lg">
  <div class="px-4 py-5 sm:px-6">
    <h3 class="text-xl text-indigo-600 font-bold tracking-wide uppercase">
      AniPlayer Information
    </h3>
  </div>
  <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
    <dl class="sm:divide-y sm:divide-gray-200">
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-lg font-bold text-gray-500">
          User Name
        </dt>
        <dd class="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
          Kimbella69
        </dd>
      </div>
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-lg font-bold text-gray-500">
          Character 
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          Sailor Moon
        </dd>
      </div>
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-lg font-bold text-gray-500">
          Team Name
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          Sailor Moon Beams
        </dd>
      </div>
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-lg font-bold text-gray-500">
          City
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          Atlanta
        </dd>
      </div>
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-lg font-bold text-gray-500">
          State
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          Georgia
        </dd>
      </div>
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-lg font-bold text-gray-500">
          About
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
        </dd>
      </div>

<div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-indigo-600 uppercase tracking-wider">
                Event Name
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">
                Event Location
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Attend</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                DragonCon
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Atlanta, Ga
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Summer 2021
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Attend</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

    </dl>
  </div>
</div>

      </div>
    </div>
  </div>
</div>

    );
  }
}

export default Profile;