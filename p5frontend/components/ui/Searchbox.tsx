import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    //label: string;
    name: string;
}

const Searchbox: React.FC<InputProps> = ({name, ...props }) => {
    return (
        <div className="">
            <input
                id={name}
                name={name}
                className="flex flex-col mr-5"
                {...props}
            />
        </div>
    );
};

export default Searchbox;