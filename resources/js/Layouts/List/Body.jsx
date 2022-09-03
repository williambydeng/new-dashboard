import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import {firstLetterCapitalize} from '@/Helpers/Mask';
import Head from '@/Layouts/List/Head';


const Body = ({children, size, model, head }) => {
       
    return (
        <>            
            <div className="flex items-center justify-between mb-6">
                <InertiaLink
                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                    href={route(model+"s.create")}
                >
                    Create {firstLetterCapitalize(model)}
                </InertiaLink>
            </div>

            <div className="overflow-x-auto bg-white rounded shadow">                
                <table className="w-full whitespace-nowrap">
                    <Head columns={head} />
                    <tbody>
                        {children}                
                        {size === 0 && (
                            <tr>
                                <td
                                    className="px-6 py-4 border-t"
                                    colSpan="4"
                                >
                                    No {model}s found.
                                </td>
                            </tr>
                        )}  
                    </tbody>
                </table>
            </div>            
        </>
    );
};

export default Body;