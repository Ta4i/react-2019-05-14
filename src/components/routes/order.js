import React from "react";
import OrderList from "../order-list";
import UserForm from "../user-form";

function OrderPage(props) {
  return (
    <>
      <OrderList />
      <UserForm />
    </>
  );
}

export default OrderPage;
