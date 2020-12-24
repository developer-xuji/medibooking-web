import React from "react";
import styled from "styled-components";
import Title from "../Title";

const Layout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 20px 25px;
  border-radius: 6px;
  height: 320px
`;

const UntitleList = styled.ul`
  margin-left: 0;
  margin-bottom: 0;
  list-style-type: none;
  -webkit-box-orient: horizontal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-left: 27px;
`;

const Item = styled.li`
  width: 100%;
  color: white;
  display: block;
  margin: 15px 0;
  font-size: 15px
`;

const LIST = [
  "Cardiology",
  "General Surgeon/Surgical Oncologist",
  "Maxillofacial Surgeon",
  "Otorhinolaryngology",
  "Counselor",
  "Gynaecology & Obstetrics",
  "Neurosurgeon",
];

const Specialists = () => {
  return (
    <Layout>
      <Title titleName="Specialists" />
      <div width="100%">
        <UntitleList>
          {LIST.map((l) => (
            <Item key={l}>{l}</Item>
          ))}
        </UntitleList>
      </div>
    </Layout>
  );
};
export default Specialists;
