import React from "react";

const CustomButton = ({ value, children, onClick, className }) => {
  return (
    <button type="button" value={value} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default CustomButton;
