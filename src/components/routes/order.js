import React, { Fragment } from "react";
import OrderList from "../order-list";
import UserForm from "../user-form";

function OrderPage(props) {
  return (
    <div>
      <OrderList />
      <UserForm />
    </div>
  );
}

export default OrderPage;
