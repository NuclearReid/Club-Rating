import React from "react";
import Auth from "../../utils/auth";

export default function Logout({ handleSearch }) {
  const handleLogout = () => {
    Auth.logout();
  };

  return (
    <div className="h-auto md:h-3/5 w-full md:w-10/12 bg-gradient-to-bl from-orange-400 to-red-500 rounded-3xl shadow-2xl flex flex-col justify-center items-center p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white text-center">Admin Panel</h2>
      
      <div className="space-y-4 md:space-y-6">
        <p className="text-white text-center">
          You are currently logged in as an administrator.
        </p>
        
        <div className="flex flex-col space-y-3">
          <button
            onClick={handleLogout}
            className="w-full bg-white text-red-500 font-bold py-2 px-4 rounded-lg hover:bg-white/90 transition duration-200"
          >
            Logout
          </button>
          
          <button
            onClick={handleSearch}
            className="w-full bg-transparent border border-white text-white font-bold py-2 px-4 rounded-lg hover:bg-white/10 transition duration-200"
          >
            Return to Search
          </button>
        </div>
      </div>
    </div>
  );
}