import React from "react";

const demo =
  '<span style="line-height:2">任何产品线应该保持统一的组件、交互、文案的一致性，</br>一致性让用户在操作时满足心理预期，可预测的操作接下来的任务。</span>';

export const DATA = [
  { id: 1, response: demo, isMe: false },
  { id: 2, response: "有什么可以帮到您的吗？", isMe: false },
  {
    id: 3,
    response:
      "全自动的呢，但是现在是非工作时间，除非紧急，建议亲亲上班时间再问呢 [可怜]",
    isMe: false
  }
];

export const TextContext = React.createContext({
  text: DATA,
  updateText: () => {}
});
