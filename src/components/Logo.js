import React from "react";

const Logo = ({ isFooter }) => {
  return (
    <h1
      className={`font-semibold text-3xl ${
        isFooter ? `text-white` : `text-primary`
      }`}
    >
      SB Dental
    </h1>
  );
};

export default Logo;