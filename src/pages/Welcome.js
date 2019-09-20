import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as IconWelcomeGaga } from "../static/icon-welcome-gaga.svg";

const GreenBg = styled.div`
  background-image: linear-gradient(46deg, #00d953 0%, #00b089 100%);
  height: 280px;
`;

const CardWrapper = styled.div``;

const Welcome = props => (
  <div>
    <GreenBg />
    <div>
      <IconWelcomeGaga />
      <CardWrapper>
        <h1>Hi，我是小盖 你的智能小助手~</h1>
        <h2>我可以回答你的任何问题，你可以试着这样问问我</h2>
      </CardWrapper>
      <Link to="/chat">Welcome siwen</Link>
    </div>
  </div>
);

export default Welcome;
