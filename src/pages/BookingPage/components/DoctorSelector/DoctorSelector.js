import React from "react";
import "antd/dist/antd.css";
import { List, Avatar } from "antd";
import styled, { css } from "styled-components";
import { THEME_COLOR } from "../../../../constants";

const Layout = styled.div``;
const ItemBox = styled.div`
  ${(props) =>
    ({
      true: css`
        background-color: ${THEME_COLOR};
      `,
    }[props.isSelected])}
`;

const DoctorSelector = ({ title, doctors, selected, onSelect }) => {
  return (
    <Layout>
      <h3>{title}</h3>
      <List
        itemLayout="horizontal"
        dataSource={doctors}
        renderItem={(item) => (
          <ItemBox isSelected={selected === item.name}>
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={
                  <button onClick={onSelect} value={item.name}>
                    {item.name}
                  </button>
                }
                description="Specialization:"
              />
            </List.Item>
          </ItemBox>
        )}
      />
      <div>
        <a href="#/doctors">More Doctors</a>
      </div>
    </Layout>
  );
};

export default DoctorSelector;
