import React from "react";

const Banner = ({ title }) => {
  return (
    <div className="w-full flex text-white text-3xl justify-center items-center h-48 font-medium bg-primary">
      {title}
    </div>
  );
};

export default Banner;
