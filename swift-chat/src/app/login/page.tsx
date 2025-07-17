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
          
          <form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition"
            >
              Continue
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
