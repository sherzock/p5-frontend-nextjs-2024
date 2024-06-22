import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label, children, ...props }) => {
  return (
    <button
      className="text-center border-solid border-2 border-white p-2 rounded font-bold hover:bg-white	hover:text-slate-950	"
      {...props}
    >
      {label}
       {children}
    </button>
  );
};

export default Button;