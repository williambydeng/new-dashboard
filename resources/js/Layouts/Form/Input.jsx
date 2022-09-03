import React from "react";
import {firstLetterCapitalize} from '@/Helpers/Mask';

const Input = ({value, name, label, setData, errors}) => {
    return (
        <div className="flex flex-col">
            <div className="mb-4">
                <label className="">{firstLetterCapitalize(label)}</label>
                <input
                    type="text"
                    className="w-full px-4 py-2"
                    label={label}
                    name={name}
                    value={value}
                    onChange={(e) =>
                        setData(name, e.target.value)
                    }
                />
                <span className="text-red-600">
                    {errors}
                </span>
            </div>
        </div>            
    );
};

export default Input;