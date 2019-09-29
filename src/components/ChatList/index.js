import React, { useEffect } from "react";
import { ReactComponent as IconAvada } from "../../static/icon-avada.svg";
import "./index.scss";

const ChatList = props => {
  // 自动滚动至聊天气泡最下方
  useEffect(() => {
    let ele = document.querySelectorAll("li");
    let onlyChatList = Object.values(ele).filter(
      li => li.className === "not-me" || li.className === "is-me"
    );
    let lastEle = onlyChatList[onlyChatList.length - 1];
    // console.log("type of:", lastEle);
    lastEle.scrollIntoView({ block: "end" });
  });

  return (
    <ul className="list-wrapper">
      {props.chats.map(chat => {
        // console.log("from ChatList:", chat);
        return (
          <li key={chat.id} className={chat.isMe ? "is-me" : "not-me"}>
            {!chat.isMe && <IconAvada style={{ marginLeft: "16px" }} />}
            <p
              className={chat.isMe ? "is-me-chat" : "not-me-chat"}
              dangerouslySetInnerHTML={{ __html: `${chat.response}` }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ChatList;
