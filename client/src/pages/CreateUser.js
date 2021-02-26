import React from 'react';

const CreateUser = () => {
    return (
        <div>
            
            <h1>Create User Page</h1>

                <form action="#" method="POST" class="space-y-6">
                  <div>
                    <label
                      for="username"
                      class="block text-sm font-medium text-gray-700"
                    >
                      What's your username
                    </label>
                    <div class="mt-1">
                      <input
                        id="username"
                        name="username"
                        type="text"
                        required
                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <label
                      for="city"
                      class="block text-sm font-medium text-gray-700"
                    >
                      What's your city
                    </label>
                    <div class="mt-1">
                      <input
                        id="city"
                        name="city"
                        type="text"
                        required
                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <label
                      for="state"
                      class="block text-sm font-medium text-gray-700"
                    >
                      What's your state?
                    </label>
                    <div class="mt-1">
                      <input
                        id="state"
                        name="state"
                        type="text"
                        required
                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    {/* add radios */}
                  </div>


                  <div>
                    <button
                      type="submit"
                      class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      SIGN IN
                    </button>
                  </div>
                </form>
              </div>

    );
};

export default CreateUser;