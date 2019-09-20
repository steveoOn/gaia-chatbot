import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import fetch from "isomorphic-unfetch";
import { ReactComponent as IconWelcomeGaga } from "../static/icon-welcome-gaga.svg";
import { ReactComponent as IconArrow } from "../static/icon-arrow.svg";
import { Question } from "../components";

const ques = [
  { id: 1, content: "最近迭代了什么新功能?" },
  { id: 2, content: "如何配置工作流审批节点?" },
  { id: 3, content: "为什么打不上卡?" }
];

const GreenBg = styled.div`
  background-image: linear-gradient(46deg, #00d953 0%, #00b089 100%);
  height: 280px;
  position: relative;
`;

const Line = styled.hr`
  width: 272px;
  color: #f0f0f0;
  opacity: 0.2;
  margin-top: 35px;
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 36px;
  width: 314px;
  height: 546px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 12rem;

  .welcome-h1 {
    font-size: 18px;
    color: #233257;
    text-align: center;
    width: 138px;
    margin-top: 105px;
  }

  .welcome-h2 {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #a2a9bb;
    text-align: center;
    width: 212px;
    margin-top: 35px;
  }
`;

const ContentWraper = styled.div`
  width: 314px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .to-chat {
    background: #00c171;
    border-radius: 100%;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 27rem 0 1.9rem 0;
    z-index: 2;
  }

  .icon-welcome-gaga {
    position: absolute;
    top: 6rem;
    z-index: 2;
  }
`;

const Welcome = props => {
  fetch(
    "http://chatbot.gaiaworkforce.com:2002/api/chat?question=北京&SessionId=1"
  ).then(data => console.log("data is:", data));

  return (
    <div style={{ background: "#F6F8FA" }}>
      <GreenBg />
      <ContentWraper>
        <IconWelcomeGaga className="icon-welcome-gaga" />
        <Card>
          <h1 className="welcome-h1">
            Hi，我是小盖
            <br />
            你的智能小助手~
          </h1>
          <h2 className="welcome-h2">
            我可以回答你的任何问题，你可以试着这样问问我
          </h2>
          <Line />
          <Question questions={ques} />
        </Card>
        <Link to="/chat" className="to-chat">
          <IconArrow />
        </Link>
      </ContentWraper>
    </div>
  );
};

export default Welcome;
