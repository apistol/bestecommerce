"use client"
import React from 'react'
import { useAppSelector } from '@/app/_redux/store';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  // Add any other relevant fields
}

const Cart = () => {
  const cartItems = useAppSelector((state) => Object.values(state.cartReducer.items) as CartItem[]);
  console.log(cartItems);


  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>Price: {item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;