import React from "react";
import classes from "./CartItem.module.css";
const CartItem = (props) => {
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div>
          <p className={classes["cart-item_price"]}>{`$${props.price.toFixed(
            2
          )}`}</p>
          <p
            className={classes["cart-item_amount"]}
            onClick={() => {
              console.log(props.amount);
            }}
          >
            x {props.amount}
          </p>
        </div>
      </div>
      <div>
        <button onClick={props.onRemoveItem}>-</button>
        <button onClick={props.onAddItem}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
