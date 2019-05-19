import React, { useState } from "react";
import { Icon, Button } from "antd";

function Dish(props) {
    const [amount, decrease, increase] = useCounter(0);
    return (
        <div>
            <span>{props.name}</span>
            <span style={{ float: "right" }}>
                {props.price} <Icon type="pound" />
            </span>
            <hr />
            <span style={{ paddingRight: "10px" }}>{amount}</span>
            <Button.Group>
                <Button onClick={decrease} type="primary" shape="circle" icon="minus" size="small" />
                <Button onClick={increase} type="primary" shape="circle" icon="plus" size="small" />
            </Button.Group>
        </div>
    );
}

function useCounter(initialValue) {
    const [value, setAmount] = useState(initialValue);
    return [value, () => setAmount(value <= 0 ? 0 : value - 1), () => setAmount(value + 1)];
}

export default Dish;
