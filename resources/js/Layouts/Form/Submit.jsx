import React from "react";
const Submit = ({destroy = null}) => {
    return (
        <div className="mt-4">
            
            {destroy ? 
            <div className="flex justify-between">
                <button
                    type="submit"
                    className="px-4 py-2 text-white bg-green-500 rounded"
                >
                    Update
                </button>
                <button
                    onClick={destroy}
                    tabIndex="-1"
                    type="button"
                    className="px-4 py-2 text-white bg-red-500 rounded"
                >
                    Delete
                </button>
            </div>
            : 
            <button
            type="submit"
            className="px-6 py-2 font-bold text-white bg-green-500 rounded"
            >
            Save
            </button>
            }
            
        </div>
    );
};

export default Submit;