import React from "react";
import Input from '@/Layouts/Form/Input';
import Submit from '@/Layouts/Form/Submit';
import Body from '@/Layouts/Form/Body';

const Form = ({data, handleSubmit, setData, errors, destroy = null}) => {
    return (
        <Body handleSubmit={handleSubmit}>
            <Input 
                name="name"
                label="name"
                value={data.name}
                setData={setData}
                errors={errors.name}
            />
            <Submit destroy={destroy} />
        </Body>
    );
};

export default Form;