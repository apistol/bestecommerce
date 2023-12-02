"use client"
import React from 'react'
import { BsCart2 } from "react-icons/bs";
import { useAppSelector } from '../_redux/store';
import { totalCartItemsSelector, totalPriceSelector } from '../_redux/features/cart-slice';


const CartBtn = () => {
    const totalItems = useAppSelector(totalCartItemsSelector)
    console.log(totalItems)

  return (
    <button className="active:bg-gray-400 rounded-md">
      <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-gray-300 text-gray-700">
        <BsCart2 className="h-5 w-5 transition-all ease-in-out hover:scale-125" />
        {!!totalItems && <div key={totalItems} className="bg-red-500 flex justify-center items-center
        rounded-full w-6 absolute -top-2 -right-2 text-white animate-pingOnce
        ">{totalItems}</div>}
      </div>
    </button>
  );
}

export default CartBtn
