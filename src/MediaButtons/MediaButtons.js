import { useState } from "react";
import Panel from "components/Panel/Panel";
import Button from "components/Button/Button";
import "./MediaButtons.css";

const MediaButtons = () => {
  const [activeType, setActiveType] = useState(null);

  const handleClick = (type) => {
    if (type === activeType) {
      setActiveType(null);
    } else {
      setActiveType(type);
    }
  };

  console.log(activeType);

  return (
    <Panel backgroundColor="blue">
      <Button
        active={activeType === "rewind"}
        onClick={() => handleClick("rewind")}
        text="Rewind"
      />
      <Button
        active={activeType === "fast-forward"}
        onClick={() => handleClick("fast-forward")}
        text="Fast Forward"
      />
      <Button
        active={activeType === "play"}
        onClick={() => handleClick("play")}
        text="Play"
      />
      <Button
        active={activeType === "stop"}
        onClick={() => handleClick("stop")}
        text="Stop"
      />
    </Panel>
  );
};

export default MediaButtons;
