import React from 'react';
import styled from 'styled-components';
import ServiceCard from './Components/ServiceCard';

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 20vh;

    & h3{
        font-size: 30px;
    }
`;

const Top = styled.div`
    display: flex;
`;

const Bottom = styled.div`
    display: flex;
`;

const TOP_LIST = [
    {
        key: 'flu_shuts',
        contains: 'Flu Shuts'
    },{
        key: 'general_practice',
        contains: 'General Practice'
    },{
        key: 'travel_shuts',
        contains: 'Travel Shuts'
    }
];

const BOTTOM_LIST = [
    {
        key: 'mental_health',
        contains: 'Mental Health'
    },{
        key: 'pharmacy',
        contains: 'Pharmacy'
    },{
        key: 'optometry',
        contains: 'Optometry'
    }
];

const Services = () => {
    return (
        <Layout>
            <h3>Services</h3>
            <Top>
                {
                    TOP_LIST.map((l) => (
                        <ServiceCard key={l.key} icon={l.key} text={l.contains}/>
                    ))
                }
            </Top>
            <Bottom>
                {
                    BOTTOM_LIST.map((l) => (
                        <ServiceCard key={l.key} icon={l.key} text={l.contains}/>
                    ))
                }
            </Bottom>
        </Layout>
    )
}
export default Services;