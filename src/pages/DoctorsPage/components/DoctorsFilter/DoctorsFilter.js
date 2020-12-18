import React from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

const { Option } = Select;

const FilterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 25px;
`

function DoctorsFilter(props) {
    
    return (
        <FilterContainer>
            <Select defaultValue="Specialization" style={{ width: 200, marginRight: 50, marginTop: 20 }} onChange={props.handleSpecializationChange}>
                <Option value="AllSpecialization">Specialization</Option>
                <Option value="dental">dental</Option>
                <Option value="Surgeon">Surgeon</Option>
                <Option value="Psychiatrist">Psychiatrist</Option>
            </Select>
            <Select defaultValue="Language" style={{ width: 200, marginRight: 50, marginTop: 20   }} onChange={props.handleLanguageChange}>
                <Option value="AllLanguage">Language</Option>
                <Option value="English">English</Option>
                <Option value="Chinese">Chinese</Option>
            </Select>
            {/* <Select defaultValue="All" style={{ width: 200, marginTop: 20 }} onChange={props.handleChange}>
                <Option value="All">All</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select> */}
        </FilterContainer>
    )

};

export default DoctorsFilter;