import React from 'react';
import styled from 'styled-components';
import Navigation from './components/Navigation';
import FrontPage from './components/FrontPage';
import Footer from './components/Footer';
import DoctorsPage from './components/DoctorsPage';
import PatientLoginPage from './components/PatientLoginPage';
import UserCenter from './components/UserCentre';
import DoctorInfo from './components/DoctorInfo';

import { HashRouter as Router, Route } from 'react-router-dom';

const Layout = styled.div`
    line-height: 1.25;
`;

const App = () => {
    return (
        <Router>
            <Layout>
                <Navigation />
                <Route path="/doctors" exact component={DoctorsPage}></Route>
                <Route path="/" exact component={FrontPage}></Route>
                <Route path="/user_center" exact component={UserCenter}></Route>
                <DoctorInfo />
                <Footer />
            </Layout>
        </Router>
    )
}
export default App;