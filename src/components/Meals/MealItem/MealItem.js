import { useContext } from "react";

import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemFrom";
import CartContext from "../../../store/cart-context";
const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToAddHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes["meal_item"]}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes["meal_item-desc"]}>{props.description}</p>
        <p className={classes["meal_item-price"]}>{`$${props.price}`}</p>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToAddHandler} />
      </div>
    </li>
  );
};

export default MealItem;
