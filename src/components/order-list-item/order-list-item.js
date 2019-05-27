import React from "react";
import "./order-list-item.css";

function OrderListItem({ order, deleteOrderItem }) {
  let { name, price, count } = order;

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{count}</td>
      <td>
        <button href="" className="btnDel" onClick={deleteOrderItem}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default OrderListItem;
