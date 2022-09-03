import React from 'react';
import Button from '@/Components/Button';


export default function Information({ auth }) {

    return (
        <>
            <h1>Username: {auth.username}</h1>
            <h3>Email: {auth.email}</h3>
            <h3>Wallet: {auth.wallet}</h3>
            <Button type="button">
                Link Wallet
            </Button>
        </>
    );
}
