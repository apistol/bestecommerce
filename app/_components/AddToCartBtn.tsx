"use client"
import React from 'react'
import { addToCart } from '../_redux/features/cart-slice' 
import { ProductData } from '../utils/interfaces'
import { useAppDispatch } from '../_redux/store'

interface Props {
    product: ProductData;
}

const AddToCartBtn = (props: Props) => {
    const dispatch = useAppDispatch();
    return (
        <button onClick={() => dispatch(addToCart(props.product))} className="flex w-full justify-center items-center text-white p-4 rounded-full bg-blue-600 tracking-wide hover:opacity-90">
        Add To Cart
      </button>
    )
}

export default AddToCartBtn;