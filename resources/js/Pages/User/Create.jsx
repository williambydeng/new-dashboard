import React from "react";
import { usePage, useForm } from "@inertiajs/inertia-react";
import Body from '@/Layouts/Body';
import Form from './Form';

const Create = (props) => {
    const model = "champion";
    const { raritys, regions, tribes } = usePage().props;
    const { data, setData, errors, post } = useForm({
        name: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route(model+"s.store"));
    }

    return (
        <Body props={props} model={model} action="create">                
            <Form 
                data={data} 
                handleSubmit={handleSubmit} 
                setData={setData} 
                errors={errors} 
                raritys={raritys}
                regions={regions}
                tribes={tribes}
            />                
        </Body>
    );
};

export default Create;