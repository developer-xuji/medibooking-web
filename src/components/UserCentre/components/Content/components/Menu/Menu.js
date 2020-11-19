import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Layout = styled.ul`
  a {
    color: black;
    text-decoration: none;
  }
  padding: 0;
  margin: 0;
  /* background-color: lightcyan; */
`;
const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  transition: background-color 200ms;
  cursor: pointer;
  font-size: large;
  height: 10vh;
  border-bottom: #e1e1e1 1px solid;
  &:hover {
    background-color: #5fb3ce;
  }
`;

class Menu extends React.Component {
  render() {
    return (
      <Layout>
        <Link to={"/personalInfo"} className="nav-link">
          <MenuItem>Personal Information</MenuItem>
        </Link>

        <Link to={"/accountInfo"} className="nav-link">
          <MenuItem>Account Information</MenuItem>
        </Link>

        <Link to={"/manageBookings"} className="nav-link">
          <MenuItem>Manage Bookings</MenuItem>
        </Link>
      </Layout>
    );
  }
}

export default withRouter(Menu);
