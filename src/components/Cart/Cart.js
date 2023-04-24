import { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "./../../store/cart-context";
import CheckOut from "./CheckOut";

const Cart = (props) => {
  const [isCheckOut, setIsCheckOut] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const orderButtonOnClickHandler = () => {
    setIsCheckOut(true);
  };

  const onConfirmCheckOutHanlder = (userData) => {
    fetch("https://react-https-ecf22-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orders: cartCtx.items,
      }),
    });
  };

  return (
    <Modal onClose={props.onClose}>
      <div>
        <ul className={classes["cart-items"]}>
          {cartCtx.items.map((item) => {
            return (
              <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onAddItem={() => cartCtx.addItem(item)}
                onRemoveItem={() => cartCtx.removeItem(item.id)}
              />
            );
          })}
        </ul>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        {isCheckOut && (
          <CheckOut
            onCancel={props.onClose}
            onConfirm={onConfirmCheckOutHanlder}
          />
        )}
        {!isCheckOut && (
          <div className={classes.actions}>
            <button className={classes["btn-close"]} onClick={props.onClose}>
              Close
            </button>
            {hasItems && (
              <button
                className={classes["btn-order"]}
                onClick={orderButtonOnClickHandler}
              >
                Order
              </button>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
