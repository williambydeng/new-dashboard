import React from "react";
import {firstLetterCapitalize} from '@/Helpers/Mask';

const Select = ({options, value, name, label, setData, errors}) => {
    return (
        <div className="flex flex-col">
            <div className="mb-4">
                <label className="">{firstLetterCapitalize(label)}</label>
                <select
                    className="w-full px-4 py-2"
                    label={label}
                    name={name}
                    value={value}
                    onChange={(e) =>
                        setData(name, e.target.value)
                    }
                    defaultValue={value}
                >
                    {options.map((item, key) =>
                        <option key={key} value={item.id}>{item.name}</option>
                    )}
                </select>
                <span className="text-red-600">
                    {errors}
                </span>
            </div>
        </div>            
    );
};

export default Select;