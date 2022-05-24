import React from "react";
import { Link } from "gatsby";

const classNames = [
  `tracking-[0.2em] uppercase font-medium rounded-md inline-block text-xs`,
];
export const LinkButton = ({ children, to, className, variant }) => {
  return (
    <Link
      className={`${[...classNames]} ${className} ${
        variant === "blue" && "bg-primary text-white"
      } ${variant === "orange" && "bg-secondary text-white"} ${
        variant === "white" && "bg-white text-primary"
      }`}
      to={to}
    >
      {children}
    </Link>
  );
};

export const NormalButton = ({ children, onClick, className, variant }) => {
  console.log();

  return (
    <button
      className={`${[...classNames]} ${className} ${
        variant === "blue" && "bg-primary text-white"
      } ${variant === "orange" && "bg-secondary text-white"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
