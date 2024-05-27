import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

const Searchbox: React.FC<InputProps> = ({ label, name, ...props }) => {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="">
                {label}
            </label>
            <input
                id={name}
                name={name}
                className="flex flex-col mt-2"
                {...props}
            />
        </div>
    );
};

export default Searchbox;