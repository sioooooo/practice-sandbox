import { ColoredMessage } from "./ColoredMessage";
import { useState } from "react";
export const App = () => {
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    console.log("連だ");
    setNum(num + 1);
  };

  return (
    <div>
      <h1>こんにちは！</h1>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </div>
  );
};
