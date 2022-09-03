import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage, useForm } from "@inertiajs/inertia-react";
import Body from '@/Layouts/Body';
import Form from './Form';

const Edit = (props) => {
    const model = "rarity";
    const { rarity } = usePage().props;
    const { data, setData, put, errors } = useForm({
        name: rarity.name || "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(route(model+"s.update", rarity.id));
    }
    function destroy() {
        if (confirm(`Are you sure you want to delete this ${model}?`)) {
            Inertia.delete(route(model+"s.destroy", rarity.id));
        }
    }

    return (
        <Body props={props} model={model} action="edit">                
            <Form data={data} handleSubmit={handleSubmit} setData={setData} errors={errors} destroy={destroy}/>                
        </Body>
    );
};

export default Edit;