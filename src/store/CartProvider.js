import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems;
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingItemIndex = state.items.findIndex(
      (itemInArray) => itemInArray.id === action.item.id
    );

    const existingItem = state.items[existingItemIndex];
    if (existingItemIndex === -1) {
      updatedItems = state.items.concat(action.item);
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    let updatedItems;
    let updatedTotalAmount;
    const indexRemove = state.items.findIndex(
      (itemInArray) => itemInArray.id === action.id
    );
    updatedItems = [...state.items];
    const removeItem = updatedItems[indexRemove];
    if (removeItem.amount > 1) {
      let updatedItem = {
        ...removeItem,
        amount: removeItem.amount - 1,
      };
      updatedItems[indexRemove] = updatedItem;
    } else {
      updatedItems = state.items.filter(
        (itemInArray) => itemInArray.id !== removeItem.id
      );
    }
    updatedTotalAmount = Math.max(state.totalAmount - removeItem.price, 0);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
