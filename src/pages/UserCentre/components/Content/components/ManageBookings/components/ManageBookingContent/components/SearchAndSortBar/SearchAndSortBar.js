import React from "react";
import styled from "styled-components";
import { MOBILE_WIDTH } from "../../../../../../../../../../constants";

const role = localStorage.getItem("ROLE");
const Layout = styled.form`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: ${MOBILE_WIDTH}) {
    display: flex;
    flex-direction: column;
  }
`;

const SearchBar = styled.input`
  border: 1px solid #c2c0c0;
  font-size: 18px;
  padding: 5px 10px;
  margin-left: 30px;
  width: 40%;
  border-radius: 10px;
  outline: none;
  @media screen and (max-width: ${MOBILE_WIDTH}) {
    width: 100%;
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

const SortBar = styled.select`
  width: 30%;
  margin-right: 30px;
  font-size: 18px;
  padding: 5px 10px;
  border: 1px solid #c2c0c0;
  border-radius: 5px;
  outline: none;
  @media screen and (max-width: ${MOBILE_WIDTH}) {
    width: 100%;
    margin: 0;
  }
`;

class SearchAndSortBar extends React.Component {
  handleFilterTextChange = (e) => {
    this.props.onFilterTextChange(e.target.value);
  };

  handleSortChange = (e) => {
    this.props.onSortChange(e.target.value);
  };

  render() {
    const oppositeRole = role === "ROLE_DOCTOR" ? "patient" : "doctor";
    return (
      <Layout>
        <SearchBar
          className="searchBar"
          type="text"
          placeholder={`Search by ${oppositeRole}'s name...`}
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />

        <SortBar className="sortBar" onChange={this.handleSortChange}>
          <option value="byDateNew">Sort By Time (New)</option>
          <option value="byDateOld">Sort By Time (Old)</option>
          <option value="byName">Sort By Name</option>
        </SortBar>
      </Layout>
    );
  }
}

export default SearchAndSortBar;
