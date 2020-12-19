import React from "react";
import styled from "styled-components";
import { HOME_BACKGROUND } from "../../constants";
import { MOBILE_WIDTH } from "../../constants";
import { getRoutePath } from "../../utils/getRoute";

import ControlCard from "./components/ControlCard";
import Services from "./components/Services";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(${HOME_BACKGROUND});
  background-size: 100%;
  background-repeat: no-repeat;
  min-height: 600px;
  background-size: repeat;
  align-items: center;
  padding-top: 80px;
`;
const Slogan = styled.div`
  font-size: 50px;
  max-width: 800px;
  text-align: center;
`;

const CardArea = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 80px;
  @media screen and (max-width: ${MOBILE_WIDTH}) {
    flex-direction: column;
  }
`;

const CARDS = [
  {
    key: "make_appointment",
    icon: "hospital",
    title: "Make Appointment Now",
    text: "If you feel not good. Please...",
    button: "Booking Now",
    route: "booking",
  },
  {
    key: "find_right_doctor",
    icon: "doctor",
    title: "Find the right doctor",
    text:
      "With over 170 Doctors, we’ll help find the right one for you and your family.",
    button: "Search Our Doctors",
    route: "doctors",
  },
];

const FrontPage = () => {
  return (
    <Layout>
      <Slogan>
        The very best general practitioners for you and your family
      </Slogan>
      <CardArea>
        {CARDS.map((card) => (
          <ControlCard
            key={card.key}
            icon={card.icon}
            title={card.title}
            text={card.text}
            button={card.button}
            href={getRoutePath(card.route)}
          />
        ))}
      </CardArea>
      <Services />
    </Layout>
  );
};
export default FrontPage;
