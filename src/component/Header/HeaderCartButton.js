import React from "react";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../Store/CartContext";
import { useContext } from "react";
import MedicineIcone from "../Header/MedicineIcone"



const HeaderCartButton = (props) => {
  
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + +item.quantity;

  }, 0);
  // const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
  //   const quantity = +item.quantity; // Convert quantity to a number
  //   if (isNaN(quantity)) {
  //     return curNumber; // Skip invalid quantities
  //   }
  //   return curNumber + quantity;
  // }, 0);
  

 
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        {" "}
        <MedicineIcone />{" "}
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;