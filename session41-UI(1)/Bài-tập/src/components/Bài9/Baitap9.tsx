import React from "react";

export default function Baitap9() {
  return (
    <div className="w-60 h-screen bg-gray-700 rounded-md p-3 text-white-500 flex flex-col gap-8">
      <div className="w-10 h-10 bg-white"></div>
      <div className="w-full flex flex-col gap-3">
        <button className="w-full h-10 p-2 flex justify-center items-center gap-8">
          <i className="text-2xl fa-solid fa-house"></i>
          <span className="w-20">Dashboard</span>
        </button>
        <button className="w-full h-10 p-2 flex justify-center items-center gap-8">
          <i className="text-2xl fa-solid fa-pen-clip"></i>
          <span className="w-20">Posts</span>
        </button>
        <button className="w-full h-10 p-2 flex justify-center items-center gap-8">
          <i className="text-2xl fa-solid fa-image"></i>
          <span className="w-20">Media</span>
        </button>
        <button className="w-full h-10 p-2 flex justify-center items-center gap-8">
          <i className="text-2xl fa-solid fa-file"></i>
          <span className="w-20">Pages</span>
        </button>
        <button className="w-full h-10 p-2 flex justify-center items-center gap-8">
          <i className="text-2xl fa-solid fa-comment"></i>
          <span className="w-20">Comments</span>
        </button>
        <button className="w-full h-10 p-2 flex justify-center items-center gap-8">
          <i className="text-2xl fa-solid fa-tablet-button"></i>
          <span className="w-20">Appearance</span>
        </button>
        <button className="w-full h-10 p-2 flex justify-center items-center gap-8">
          <i className="text-2xl fa-solid fa-briefcase"></i>
          <span className="w-20">Plugins</span>
        </button>
        <button className="w-full h-10 p-2 flex justify-center items-center gap-8">
          <i className="text-2xl fa-solid fa-users"></i>
          <span className="w-20">Users</span>
        </button>
        <button className="w-full h-10 p-2 flex justify-center items-center gap-8">
          <i className="text-2xl fa-solid fa-gear"></i>
          <span className="w-20">Settings</span>
        </button>
        <button className="w-full h-10 p-2 flex justify-center items-center gap-8">
          <i className="text-2xl fa-solid fa-screwdriver-wrench"></i>
          <span className="w-20">Tools</span>
        </button>
      </div>
      <div className="w-full p-2 flex justify-center items-center gap-4">
        <i className="text-3xl fa-solid fa-moon"></i>
        <span>Light Mode</span>
        <label className="relative inline-block w-16 h-8">
          <input type="checkbox" className="hidden peer" />
          <span className="absolute top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full cursor-pointer peer-checked:bg-blue-500 transition-colors"></span>
          <span className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform peer-checked:translate-x-8"></span>
        </label>
      </div>
      <div className="w-full p-2 bg-pink-300">
        <i className="fa-solid fa-right-from-bracket"></i>
        <span>Logout</span>
      </div>
    </div>
  );
}
