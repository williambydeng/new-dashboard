import React from "react";

const Body = ({handleSubmit, children}) => {
    return (
        <form name="Form" onSubmit={handleSubmit}>
            {children}
        </form>            
    );
};

export default Body;