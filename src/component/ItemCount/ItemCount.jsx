import React, { useContext, useState } from "react";
import { CartContext } from '../../context/CartContext';
import "./ItemCount.css"

const ItemCount = () => {
  const [count, setCount] = useState(0);
  const { cartItems, setCartItems } = useContext(CartContext);
  const stock = 3; // La cantidad que tengo en stock

  const handleAddProduct = () => {
    if (count < stock) {
      setCartItems(cartItems + 1);
      setCount(count + 1);
    }
  };

  const handleRemoveProduct = () => {
    if (count > 0) {
      setCartItems(cartItems - 1);
      setCount(count - 1);
    }
  };

  return (
    <div className="countStyle">
      <button onClick={handleRemoveProduct}>-</button>
      <label className="estiloCount">{count}</label>
      <button onClick={handleAddProduct}>+</button>
    </div>
  );
};

export default ItemCount;
