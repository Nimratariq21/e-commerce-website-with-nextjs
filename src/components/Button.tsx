import React from 'react';

// Define the props type
interface ButtonProps {
  title: string; // 'title' must be a string
  btnClass?: string; // 'btnClass' is optional and must be a string if provided
}

const Button: React.FC<ButtonProps> = ({ title, btnClass }) => {
  return (
    <button className={`${btnClass}`}>{title}</button>
  );
};

export default Button;
