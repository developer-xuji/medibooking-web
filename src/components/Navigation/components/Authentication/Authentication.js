import React from 'react';
import styled from 'styled-components';
import NavItem from '../NavItem';
import DropdownWidget from '../../../DropdownWidget';
import FontAwesome from 'react-fontawesome';
import Modal from '../../../Modal';
import Avatar from './components/Avatar';
import SignUpPage from '../../../SignUpPage';

const Layout = styled.div`
    display: flex;
    align-items: center;
`;

const NakedButton = styled.button`
    background-color: transparent;
    outline: 0;
    border-left: 0;
    border-right: 0;
    cursor: pointer;
    text-align: left;
`;

const Icon = styled(FontAwesome)`
    margin-right: 10px;
    color: lightgray;
`;

class Authentication extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ShowLoginMenu: false,
            ShowSignUpModal: false
        };
    }

    setShowLoginMenu(value) {
        this.setState({
            ShowLoginMenu: value
        });
    }

    setShowSignUpModal(value) {
        this.setState({
            ShowSignUpModal: value
        });
    }

    render() {
        const {ShowLoginMenu} = this.state;
        const {ShowSignUpModal} = this.state;

        const PatientSignUpPage = () => (<SignUpPage />);
        const LOGIN_MENU = [{
            key: 'log in as a patient',
            href: '#/patient_login',
            contains: 'Log in as a patient'
        },{
            key: 'log in as a doctor',
            href: '#/doctor_login',
            contains: 'Log in as a doctor'
        }];
        
        return (
            <Layout>
                <NavItem 
                    variant = 'highlight'
                    as = {NakedButton}
                    onClick = {() => this.setShowSignUpModal(!ShowSignUpModal)}
                >
                    <Icon 
                        name='user-plus'
                        style={{ fontSize: "30px" }}
                    />
                    Sign Up
                </NavItem>
                {ShowSignUpModal && (<Modal page={PatientSignUpPage} onClose={() => this.setShowSignUpModal(false)}/>)}

                <div>
                    <NavItem
                        as = {NakedButton}
                        variant = 'highlight' 
                        onClick = {() => this.setShowLoginMenu(!ShowLoginMenu) }
                    >
                        <Icon 
                            name='sign-in'
                            style={{ fontSize: "30px" }}
                        />
                        Log in
                    </NavItem>
                    {ShowLoginMenu && (<DropdownWidget 
                                            items={LOGIN_MENU} 
                                    />)}
                </div>
                <Avatar as='a' href='#/user_center'/>   
            </Layout>
        )
    }
}
export default Authentication;