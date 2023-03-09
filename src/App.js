import { useState } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const handleShowCart = () => {
    setCartIsShow(true);
  };

  const handleHideCart = () => {
    setCartIsShow(false);
  };

  return (
    <CartProvider>
      <Header onShow={handleShowCart} />
      {cartIsShow && <Cart onClose={handleHideCart} />}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
