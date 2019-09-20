import React from "react";
import styled from "styled-components";
import { ReactComponent as IconAvada } from "../../static/icon-avada.svg";

const ListWrapper = styled.ul`
  .not-me {
    text-align: left;
    display: flex;
  }
  .is-me {
    display: flex;
    justify-content: flex-end;
  }

  .not-me-chat {
    margin-left: 9px;
    background: #f6f8fa;
    border-radius: 0 28px 28px 28px;
    font-size: 14px;
    color: #233257;
  }

  .is-me-chat {
    background: #00c171;
    border-radius: 28px 28px 0 28px;
    font-size: 14px;
    color: #ffffff;
    margin-right: 16px;
  }

  li {
    margin: 16px 0;
  }

  p {
    max-width: 240px;
    padding: 18px;
  }

  list-style: none;
  padding-left: 0;
  height: 43rem;
  overflow: scroll;
`;

const ChatList = props => {
  return (
    <ListWrapper>
      {props.chats.map(chat => (
        <li key={chat.id} className={chat.isMe ? "is-me" : "not-me"}>
          {!chat.isMe && <IconAvada style={{ marginLeft: "16px" }} />}
          <p className={chat.isMe ? "is-me-chat" : "not-me-chat"}>
            {chat.response}
          </p>
        </li>
      ))}
    </ListWrapper>
  );
};

export default ChatList;
