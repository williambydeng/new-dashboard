import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import Body from '@/Layouts/Body';
import List from '@/Layouts/List/Body';
import Cell from '@/Layouts/List/Cell';


const Index = (props) => {
    const { regions } = usePage().props;
    const model = 'region';
    return (
        <Body props={props} model={model}>
            <List model={model} head={['name']} size={regions.length} >   
                    {regions.map(({ id, name }) => (
                        <tr key={id} >                            
                            <Cell model={model} id={id} value={id} />
                            <Cell model={model} id={id} value={name} />
                            <Cell model={model} id={id} value='Edit' variant='button'/>
                        </tr>
                    ))}
                           
            </List>            
        </Body>
    );
};

export default Index;