import React from 'react';
import Body from '@/Layouts/Body';
import Information from '@/Components/Profile/Information';
import CTA from '@/Components/CTA';


export default function Dashboard(props) {
    return (
        <Body props={props} model='dashboard'>
            <div className="grid lg:grid-cols-3 gap-4">
                <div>
                    <Information auth={props.auth.user} />
                </div>
                <div className="lg:col-span-2">
                    <CTA />
                </div>
            </div>
            
            
        </Body>
    );
}
