import React, { useState } from "react";
import Cart from "./component/Cart/Cart";
import Header from "./component/Header/Header";
import MedicineForm from "./component/medicine/MedicineForm";
import CartProvider from "./component/Store/CartProvider";
import DisplayList from "./component/medicine/DisplayList";

export default function App() {
  const [showCart, setShowCart] = useState(false);
  const [list, setList] = useState([]);

  const cartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  const saveData = (order) => {
    setList([...list, order]);
  };

  console.log(saveData);

  return (
    <CartProvider>
      {showCart && <Cart onClose={hideCartHandler} />}

      <Header onShowCart={cartHandler} />
      <main>
        <MedicineForm onSaveData={saveData} />
      </main>
      <DisplayList items={list} />
    </CartProvider>
  );
}
