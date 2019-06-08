import React from "react";
import UserForm from "../user-form";
import OrderList from "../order-list";

function OrderPage() {
  return (
    <>
      <OrderList />
      <UserForm />
    </>
  );
}

export default OrderPage;
