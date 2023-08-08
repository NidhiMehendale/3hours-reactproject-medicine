import React from "react";

const CartContext = React.createContext({
    items:[],
    totalAmount:0,
    addItem:(item) => {},
    removetItem: (id) =>{},
})

export default CartContext;