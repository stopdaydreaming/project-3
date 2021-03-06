import React, { Component } from 'react';

class Radio extends Component {
    render() {
        return (
          <fieldset>
            <legend className="sr-only">
              Privacy setting
            </legend>
          
            <div className="bg-white rounded-md -space-y-px">
              <div className="relative border rounded-tl-md rounded-tr-md p-4 flex">
                <div className="flex items-center h-5">
                  <input id="settings-option-0" name="privacy_setting" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300" checked/>
                </div>
                <label htmlFor="settings-option-0" className="ml-3 flex flex-col cursor-pointer">
                  <span className="block text-sm font-medium">
                    Public access
                  </span>
                  <span className="block text-sm">
                    This project would be available to anyone who has the link
                  </span>
                </label>
              </div>
          
              <div className="relative border border-gray-200 p-4 flex">
                <div className="flex items-center h-5">
                  <input id="settings-option-1" name="privacy_setting" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300"/>
                </div>
                <label htmlFor="settings-option-1" className="ml-3 flex flex-col cursor-pointer">
                  <span className="block text-sm font-medium">
                    Private to Project Members
                  </span>
                  <span className="block text-sm">
                    Only members of this project would be able to access
                  </span>
                </label>
              </div>
          
              <div className="relative border border-gray-200 rounded-bl-md rounded-br-md p-4 flex">
                <div className="flex items-center h-5">
                  <input id="settings-option-2" name="privacy_setting" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300"/>
                </div>
                <label htmlFor="settings-option-2" className="ml-3 flex flex-col cursor-pointer">
                  <span className="block text-sm font-medium">
                    Private to you
                  </span>
                  <span className="block text-sm">
                    You are the only one able to access this project
                  </span>
                </label>
              </div>
            </div>
          </fieldset>
          
        );
    }
}

export default Radio;