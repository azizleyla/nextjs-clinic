import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="h-20 w-20  animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent"></div>
    </div>
  );
};

export default Loading;
