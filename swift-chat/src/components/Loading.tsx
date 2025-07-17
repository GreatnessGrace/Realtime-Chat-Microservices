import React from "react";

const Loading = () => {
  return (
    <div className="fixex inset-0 flex items-center justify-center bg-gray-900 min-h-screen">
      <div className="h-12 w-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
    </div>
  );
};

export default Loading;
