import React from "react";
import Input from '@/Layouts/Form/Input';
import Select from '@/Layouts/Form/Select';

import Submit from '@/Layouts/Form/Submit';
import Body from '@/Layouts/Form/Body';

const Form = ({data, raritys, regions, tribes, handleSubmit, setData, errors, destroy = null}) => {
    console.log(data)
    return (
        <Body handleSubmit={handleSubmit}>
            <Input 
                name="name"
                label="name"
                value={data.name}
                setData={setData}
                errors={errors.name}
            />
            <Input 
                name="specie"
                label="specie"
                value={data.specie}
                setData={setData}
                errors={errors.specie}
            />
            <Select 
                name="rarityId"
                label="rarity"
                value={data.rarityId}
                setData={setData}
                errors={errors.rarityId}
                options={raritys}
            />
            <Select 
                name="regionId"
                label="region"
                value={data.regionId}
                setData={setData}
                errors={errors.regionId}
                options={regions}
            />
            <Select 
                name="tribeId"
                label="tribe"
                value={data.tribeId}
                setData={setData}
                errors={errors.tribeId}
                options={tribes}
            />
            <Input 
                name="image"
                label="image"
                value={data.image}
                setData={setData}
                errors={errors.image}
            />
            <Input 
                name="idealPressure"
                label="ideal Pressure"
                value={data.idealPressure}
                setData={setData}
                errors={errors.idealPressure}
            />
            <Input 
                name="brawl"
                label="brawl"
                value={data.brawl}
                setData={setData}
                errors={errors.brawl}
            />
            <Input 
                name="agility"
                label="agility"
                value={data.agility}
                setData={setData}
                errors={errors.agility}
            />
            <Input 
                name="cunning"
                label="cunning"
                value={data.cunning}
                setData={setData}
                errors={errors.cunning}
            />
            <Submit destroy={destroy} />
        </Body>
    );
};

export default Form;