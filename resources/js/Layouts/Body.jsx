import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import { InertiaLink } from "@inertiajs/inertia-react";
import {firstLetterCapitalize} from '@/Helpers/Mask';

export default function Body({props, model, action = null, children}) {
    return (
        <Authenticated
            auth={props.auth}
            action={action}
            errors={props.errors}
            header={
                <h1>
                {action ? <>
                    <InertiaLink
                            href={route(model+"s.index")}
                            className="text-indigo-600 hover:text-indigo-700"
                        >
                        {firstLetterCapitalize(model)}
                    </InertiaLink>
                    <span className="font-medium text-indigo-600"> / </span>{firstLetterCapitalize(action)}</> : firstLetterCapitalize(model)}
                </h1>                
            }
        >
            <Head title={firstLetterCapitalize(model)} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">{children}</div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
