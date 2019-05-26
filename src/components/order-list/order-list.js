import React, { Component } from "react";
import { connect } from "react-redux";
import { increaseCart, decreaseCart } from "../../ac/actions";

import "./order-list.css";

function OrderList(props) {
  return (
    <div className="order-list">
      <table>
        <thead>
          <tr>
            <th>Dish name</th>
            <th>Count</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Burger</td>
            <td>5</td>
            <td>
              <a>Delete</a>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total price:</td>
            <td />
            <td className="total-price">200</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

// OrderList.propTypes = {
//   restaurants: PropTypes.arrayOf(
//     PropTypes.shape({
//       image: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       menu: PropTypes.array.isRequired,
//       reviews: PropTypes.array.isRequired
//     })
//   ).isRequired,
//
//   openItemId: PropTypes.string,
//   toggleOpenItem: PropTypes.func.isRequired
// };

export default connect()(OrderList);
