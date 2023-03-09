import { Fragment, useContext } from "react";

import mealsImage from "../../assets/meals.jpg";
import CartContext from "../../store/cart-context";
import classes from "./Header.module.css";
import { HiShoppingCart } from "react-icons/hi2";
const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button className={classes["cart-button"]} onClick={props.onShow}>
          <span>
            <HiShoppingCart size={"1.8rem"} />
          </span>
          <span>Your Cart</span>
          <span className={classes["cart-number"]}>{numberOfCartItems}</span>
        </button>
      </header>
      <div>
        <img
          className={classes["main-header"]}
          src={mealsImage}
          alt="A table full delicious food"
        />
      </div>
    </Fragment>
  );
};

export default Header;
