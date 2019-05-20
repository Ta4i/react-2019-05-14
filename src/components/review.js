import React from "react";
import { List, Avatar } from "antd";

export default function Review(props) {
  return (
    <List.Item>
      <List.Item.Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title={props.user}
        description={props.text}
      />
      <div>
        Rate: <span>{props.rating}</span>
      </div>
    </List.Item>
  );
}
