import React, { useRef } from "react";
import classes from "./MedicineForm.module.css";
import Card from "../UI/Card";

const MedicineForm = (props) => {
  const inputName = useRef()
  const inputDesc = useRef()
  const inputPrice = useRef()
  const inputQty = useRef()


  const SubmitHandler = (event) => {
    event.preventDefault();

    const enteredName = inputName.current.value
    const enteredDesc = inputDesc.current.value
    const enteredPrice = inputPrice.current.value
    const enteredQty = inputQty.current.value

    const order = {
      name: enteredName,
      description: enteredDesc,
      price: enteredPrice,
      quantity: enteredQty,
    };
    props.onSaveData(order);
    console.log(order);

    fetch(
      "https://crudcrud.com/api/eaabd4a4576f442f8affd16644255284/product",
      {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };



  return (
    <Card>
      <form className={classes.form} onSubmit={SubmitHandler}>
        <label className={classes.f1}>Medicine Name:</label>
        <input type="text" ref={inputName} />

        <label className={classes.f1}>Description:</label>
        <input type="text" ref={inputDesc} />

        <label className={classes.f1}>price:</label>
        <input type="number" ref={inputPrice} />

        <label className={classes.f1}>quantity:</label>
        <input type="number" ref={inputQty} />

        <button className={classes.f2}>Add To List</button>
      </form>
    </Card>
  );
};

export default MedicineForm;