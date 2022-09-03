import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import Body from '@/Layouts/Body';
import List from '@/Layouts/List/Body';
import Cell from '@/Layouts/List/Cell';


const Index = (props) => {
    const { champions } = usePage().props;
    const model = 'champion';
    return (
        <Body props={props} model={model}>
            <List model={model} head={['name', 'rarity', 'tribe', 'region']} size={champions.length} >   
                    {champions.map(({ id, name, rarity, tribe, region }) => (
                        <tr key={id} >                            
                            <Cell model={model} id={id} value={id} />
                            <Cell model={model} id={id} value={name} />
                            <Cell model={model} id={id} value={rarity.name} />
                            <Cell model={model} id={id} value={tribe.name} />
                            <Cell model={model} id={id} value={region.name} />
                            <Cell model={model} id={id} value='Edit' variant='button'/>
                        </tr>
                    ))}
                           
            </List>            
        </Body>
    );
};

export default Index;