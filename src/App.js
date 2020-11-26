import React from 'react';
import styled from 'styled-components';
import Navigation from './components/Navigation';
import FrontPage from './components/FrontPage';
import Footer from './components/Footer';
import DoctorsPage from './components/DoctorsPage';
import PatientLoginPage from './components/PatientLoginPage';
import UserCenter from './components/UserCentre';
import DoctorInfo from './components/DoctorInfo';
import DoctorLogin from './components/DoctorLogin';
import BookingPage from './pages/BookingPage';

import { HashRouter as Router, Route } from 'react-router-dom';
import {HOME_BACKGROUND} from './constants';
import {NAVIGATION_GAP} from './constants';

const Layout = styled.div`
    line-height: 1.25;
    background: url(${HOME_BACKGROUND});
    background-size: 100%;
    background-repeat: no-repeat;
    padding-top: ${NAVIGATION_GAP};
`;

const App = () => {
    return (
        <Router>
            <Layout>
                <Navigation />
                <Route path='/doctors' exact component={DoctorsPage}></Route>
                <Route path='/' exact component={FrontPage}></Route>
                <Route path='/user_center' exact component={UserCenter}></Route>
                <Route path='/patient_login' exact component={PatientLoginPage}></Route>
                <Route path='/doctor_login' exact component={DoctorLogin}></Route>
                <Route path='/doctor_details' exact component={DoctorInfo}></Route>
                <Route path='/booking' exact component={BookingPage}></Route>
                
                <Footer />
            </Layout>
        </Router>
    )
}
export default App;