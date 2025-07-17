"use client";
import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="bg-gray-800 border border-gray-600 rounded-2xl shadow-lg p-10">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">
              Welcome to SwiftChat
            </h1>
            <p className="text-gray-400">
              Sign in to start chatting in real time
            </p>
          </div>
          {/* Form will come here */}
        </div>
      </div>
     </div>

  );
};

export default LoginPage;
