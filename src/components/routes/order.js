import React from "react";
import OrderList from "../order-list";
import UserForm from "../user-form";

function Order(props) {
  return (
    <>
      <OrderList />
      <UserForm historyPush={props.history.push} />
    </>
  );
}

export default Order;
