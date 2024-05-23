import React from "react";

export default function Baitap10() {
  return (
    <div className="max-w-md mx-auto p-4 space-y-4 bg-white rounded-lg shadow-md">
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          UserName
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Username"
          type="text"
          id="username"
        />
      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Password"
          type="password"
          id="password"
        />
      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="input-text"
        >
          Input text label
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter label"
          type="text"
          id="input-text"
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center">
          <input
            className="mr-2"
            type="radio"
            id="remember-me"
            name="radio-group"
          />
          <label className="text-gray-700" htmlFor="remember-me">
            Remember me
          </label>
        </div>
        <div className="flex items-center">
          <input className="mr-2" type="radio" id="radio1" name="radio-group" />
          <label className="text-gray-700" htmlFor="radio1">
            Radio Selection 1
          </label>
        </div>
        <div className="flex items-center">
          <input className="mr-2" type="radio" id="radio2" name="radio-group" />
          <label className="text-gray-700" htmlFor="radio2">
            Radio Selection 2
          </label>
        </div>
        <div className="flex items-center">
          <input className="mr-2" type="radio" id="radio3" name="radio-group" />
          <label className="text-gray-700" htmlFor="radio3">
            Radio Selection 3
          </label>
        </div>
      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="dropdown"
        >
          Dropdown
        </label>
        <select
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="dropdown"
        >
          <option value="">DropDown option</option>
          <option value="">DropDown option 1</option>
          <option value="">DropDown option 2</option>
        </select>
      </div>
      <div className="flex space-x-4 mt-4 justify-between">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Cancel
        </button>
        <button className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
          Next
        </button>
      </div>
    </div>
  );
}
