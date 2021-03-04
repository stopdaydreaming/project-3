import React, { Component } from 'react';
// import ProfilePic from "./../../assets/Img/sms.jpg";

class Profile extends Component {
  render() {
    return (

<div className="bg-white overflow-hidden">
  <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
    <div className="mx-auto text-base max-w-prose lg:max-w-none">
      <h2 className="text-2xl text-indigo-600 font-semibold tracking-wide uppercase">AniPlayer Profile</h2>
      <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight  text-gray-900 sm:text-4xl">Welcome {this.props.currentUser.username}</h3>
    </div>
    <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
      <div className="relative lg:row-start-1 lg:col-start-2">
        <svg className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
          <defs>
            <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-indigo-500" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
        </svg>
        <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
          <figure>
            <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
              <img className="rounded-lg shadow-lg object-cover object-center" src={this.props.currentUser.mainCharacter.photo} alt="User Profile pic" />
            </div>
            <br></br>
            <button type="button" className="inline-flex items-center px-8 py-4  border border-transparent shadow-sm text-lg leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Assemble Team
            
</button>
          </figure>
        </div>
      </div>


      <div className="mt-8 lg:mt-0">
      
<div className="bg-white shadow overflow-hidden sm:rounded-lg">
  <div className="px-4 py-5 sm:px-6">
    <h3 className="text-xl text-indigo-600 font-bold tracking-wide uppercase">
      AniPlayer Information
    </h3>
  </div>
  <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
    <dl className="sm:divide-y sm:divide-gray-200">
      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-lg font-bold text-indigo-500">
          Username
        </dt>
        <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
          {this.props.currentUser.username}
        </dd>
      </div>
      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-lg font-bold text-indigo-500">
          Character 
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {this.props.currentUser.mainCharacter.name}
        </dd>
      </div>
      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-lg font-bold text-indigo-500">
          Title
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {this.props.currentUser.mainCharacter.title}
        </dd>
      </div>
      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-lg font-bold text-indigo-500">
          City
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {this.props.currentUser.city}
        </dd>
      </div>
      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-lg font-bold text-indigo-500">
          State
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {this.props.currentUser.state}
        </dd>
      </div>
      {/* <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-lg font-bold text-indigo-500">
          Synopsis
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {this.props.currentUser.mainCharacter.synopsis}
        </dd>
      </div> */}

<div className="flex flex-col">
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-indigo-600 uppercase tracking-wider">
                Event Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">
                Location
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Attend</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                DragonCon
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Atlanta, Ga
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Summer 2021
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
            </tr>
          </tbody>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Anime Magic! 
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Austin, TX
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                March 19-21 2021
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 centered font-semibold rounded-full bg-red-100 text-red-800">
                  Cancelled
                </span>
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