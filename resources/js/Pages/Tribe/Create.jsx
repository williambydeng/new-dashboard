import React from "react";
import { useForm } from "@inertiajs/inertia-react";
import Body from '@/Layouts/Body';
import Form from './Form';

const Create = (props) => {
    const model = "tribe";
    const { data, setData, errors, post } = useForm({
        name: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route(model+"s.store"));
    }

    return (
        <Body props={props} model={model} action="create">                
            <Form data={data} handleSubmit={handleSubmit} setData={setData} errors={errors} />                
        </Body>
    );
};

export default Create;