import React from "react";
import { Button, Icon } from "antd";

function ToggleButton({ label, isOpened, onClick }) {
  return (
    <Button onClick={onClick}>
      <Icon type={isOpened ? "caret-up" : "caret-down"} />
      {label}
    </Button>
  );
}

export default ToggleButton;
