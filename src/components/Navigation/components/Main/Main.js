import React from 'react';
import styled from 'styled-components';
import Button from '../../../Button';
import NavItem from '../NavItem';
import Icon from '../../../Icon';
import {THEME_COLOR} from '../../../../constants';

const BORDER_GAP = '20px'; 
const Layout = styled.div`
    display: flex;
    border-left: 1px solid #ccc;
    padding-left: ${BORDER_GAP}; 
    margin-left: ${BORDER_GAP};
    align-items: center;
`;

const HORIZONTAL_GAP = '12px';
const AppointmentButton = styled(Button)`
    margin-right: ${HORIZONTAL_GAP};
    background: ${THEME_COLOR};
`;
 
const Link = styled(NavItem)`
    display: block;
    text-decoration: none;  
    color: gray; 
`;

const LINKS = [{
    key: 'doctor',
    href: '/',
    children: 'Doctor',
    icon: 'user-md'
},{
    key: 'sepcialization',
    href: '/',
    children: 'Sepcialization',
    icon: 'stethoscope'
}];

const MakeAppointment = styled(NavItem)`
    padding-top: 0;
    padding-left: 0;
    padding-bottom: 0;
`;

const Main = () => {
    return(
        <Layout>
            <MakeAppointment>
                <AppointmentButton>Make an Appointment</AppointmentButton>
            </MakeAppointment>
            
            {LINKS.map((link) => (
                <Link 
                    key={link.key} 
                    as='a'
                    href={link.href}
                    variant= 'indictable'
                >
                    <Icon
                        name={link.icon}
                        style={{ fontSize: "30px" }}
                    />
                    {link.children}
                </Link>
            ))}
        </Layout>
    )
}
export default Main;