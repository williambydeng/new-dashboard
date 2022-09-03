import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

const Cell = ({id, model, value, variant = 'default' }) => {
    var className = '';
    var tabIndex = null
    switch(variant) {
        case 'default':
            className = "flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
            break;
        case 'button':
            tabIndex="1"
            className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
            break;
    }
    return (
        <td className="border-t">
            <InertiaLink
                href={route(model+"s.edit", id)}
                className={className}
                tabIndex={tabIndex}
            >
                {value}
            </InertiaLink>
        </td>        
    );
};

export default Cell;