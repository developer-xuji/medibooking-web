import React from "react";
import styled from "styled-components";
import ServiceCard from "./components/ServiceCard";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 20vh;

  & h3 {
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
    key: "flu_shuts",
    contains: "Flu Shuts",
    href: "/",
  },
  {
    key: "general_practice",
    contains: "General Practice",
    href: "#/doctors",
  },
  {
    key: "travel_shuts",
    contains: "Travel Shuts",
    href: "/",
  },
];

const BOTTOM_LIST = [
  {
    key: "mental_health",
    contains: "Mental Health",
    href: "/",
  },
  {
    key: "pharmacy",
    contains: "Pharmacy",
    href: "/",
  },
  {
    key: "optometry",
    contains: "Optometry",
    href: "/",
  },
];

const Services = () => {
  return (
    <Layout>
      <h3>Services</h3>
      <Top>
        {TOP_LIST.map((l) => (
          <ServiceCard
            key={l.key}
            icon={l.key}
            text={l.contains}
            href={l.href}
          />
        ))}
      </Top>
      <Bottom>
        {BOTTOM_LIST.map((l) => (
          <ServiceCard
            key={l.key}
            icon={l.key}
            text={l.contains}
            href={l.href}
          />
        ))}
      </Bottom>
    </Layout>
  );
};
export default Services;
