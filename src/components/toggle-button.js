import React from "react";
import { Button, Icon } from "antd";

function ToggleButton(props) {
  const { label, isOpened, onClick } = props;
  return (
    <Button onClick={onClick} block>
      <Icon type={isOpened ? "caret-up" : "caret-down"} />
      {label}
    </Button>
  );
}

export default ToggleButton;
