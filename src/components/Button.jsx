import React from "react";

const Button = ({ children, variant, className, fullWidth, ...rest }) => {
  const colors = {
    primary: "bg-neutral-800 text-white",
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
  };

  return (
    <button
      className={`${colors[variant] || colors.primary} ${fullWidth ? "w-full" : "w-fit"} flex select-none items-center justify-center gap-x-1.5 rounded-lg px-4 py-3.5 font-medium uppercase duration-200 active:scale-95 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
