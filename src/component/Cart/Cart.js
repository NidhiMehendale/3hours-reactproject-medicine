import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../Store/CartContext";
import { useContext } from "react";


const Cart = (props) => {
  const crtCntx = useContext(CartContext);

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {crtCntx.items.map((item) => (
        <li key={item.id}>
          {item.name}

          <span className={classes.down}>
            {" "}
            {item.price} x {item.quantity}
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.cover}>{CartItems}</div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>Rs{crtCntx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;