import React, { useState } from 'react';
import Hero from '../Components/Hero';
import PhonesContainer from '../Components/PhonesContainer';
import { useLoaderData } from 'react-router';

const HomePage = () => {
    const data = useLoaderData();
    
    const [ overallPhone, setOverallPhones] = useState(data);
    console.log(
        overallPhone
    );
    

    return (
        <div>
            <Hero data={data}  overallPhone={overallPhone} setOverallPhones={setOverallPhones} />
            <PhonesContainer overallPhone={overallPhone} setOverallPhones={setOverallPhones} />
        </div>
    );
};

export default HomePage;