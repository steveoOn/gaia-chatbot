import React from "react";
import styled from "styled-components";
import { ReactComponent as IconAvada } from "../../static/icon-avada.svg";

const ListWrapper = styled.ul`
  .not-me {
    text-align: left;
  }
  .is-me {
    text-align: right;
  }
`;

const ChatList = props => {
  return (
    <ListWrapper>
      {props.chats.map(chat => (
        <li key={chat.id} className={chat.isMe ? "is-me" : "not-me"}>
          {!chat.isMe && <IconAvada />}
          {chat.response}
        </li>
      ))}
    </ListWrapper>
  );
};

export default ChatList;
