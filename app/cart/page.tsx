"use client"

import { Product } from '@/types/products';
import React, { useEffect, useState } from 'react';
import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions';
import Swal from 'sweetalert2';
import { Result } from 'postcss';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import { getItemKey } from 'sanity';


export default function Cart() {
  const [cartItems,setCartItems] =useState<Product[]>([]);

  useEffect(() =>{
    setCartItems(getCartItems())
  },[]);

  const handleRemove = (id:string) =>{
    Swal.fire({
      title :"Are you sure?",
      text :"You will not be able recover this item!",
      icon :"warning",
      showCancelButton : true,
      confirmButtonColor :"#3085d6",
      cancelButtonColor :"#d35",
      confirmButtonText :"Yes, remove it!"

    }).then((Result) =>{
      if(Result.isConfirmed){
        removeFromCart(id)
        setCartItems(getCartItems())
        Swal.fire("Removed!","Item has been removed","success");
      }
    })
  }
  const handleQuantityChange = (id : string, quantity :number) =>{
  updateCartQuantity(id,quantity);
  setCartItems(getCartItems())
  }


  const handleIncrement = (id:string) =>{
    const product = cartItems.find((item) => item._id === id);
    if(product)
      handleQuantityChange(id,product.inventory + 1)
  }

  const handleDecrement = (id:string) =>{
    const product = cartItems.find((item) => item._id === id);
    if(product && product.inventory > 1)
      handleQuantityChange(id,product.inventory - 1)
  }

const caculatedTotal =() =>{
  return cartItems.reduce((total,item) => total +item.price * item.inventory,0)
}

const handledProceed = (id:string) =>{
  Swal.fire({
    title :"Processing  your order...",
    text :"Please wait a moment",
    icon :"info",
    showCancelButton : true,
    confirmButtonColor : "#3085d6",
    cancelButtonColor :"#d33",
    confirmButtonText :"Yes, proceed!" 

  }).then((result) =>{
    if(result.isConfirmed){
      Swal.fire("success","Your order has been successfully processed","success");
    
      setCartItems([]);
    }
  })
}

  return (
    <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-6 text-center">Shopping Cart</h1>
    {cartItems.length > 0 ? (
      <div className="grid gap-4">
        {cartItems.map((item) => (
          <div
            key={item._id}
            className="flex flex-col sm:flex-row items-center justify-between border p-4 rounded-lg shadow-lg"
          >
            <div className="flex flex-col items-center sm:items-start">
              {item.image && (
              <Image
                src={urlFor(item.image).url()}
                alt="image"
                width={500}
                height={500}
                className="rounded-lg w-16 h-16 object-cover"
              />
            )}
              <h2 className="text-lg font-semibold">{item.productName}</h2>
              <p className="text-gray-500">${item.price.toFixed(2)}</p>
            
            <div className="flex items-center space-x-2 mt-2">
              <button
                className="px-3 py-1 bg-gray-300 rounded-lg hover:bg-gray-400"
                onClick={() => handleDecrement(item._id)}
              >
                -
              </button>
              <span className="px-4 py-2 border rounded-lg">{item.inventory}</span>
              <button
                className="px-3 py-1 bg-gray-300 rounded-lg hover:bg-gray-400"
                onClick={() => handleIncrement(item._id)}
              >
                +
              </button>
              </div>
            </div>
            <button
              className="px-4 py-2 mt-4 sm:mt-0 bg-red-500 text-white rounded-lg hover:bg-red-600"
              onClick={() => handleRemove(item._id)}
            >
              Remove
            </button>
          </div>
        ))}
        <div className="text-right font-bold text-xl mt-6">
          Total: ${caculatedTotal().toFixed(2)}
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full"
            onClick={() =>handledProceed}
          >
            Proceed 
          </button>
        </div>
      </div>
    ) : (
      <p className="text-center text-gray-500">Your cart is empty.</p>
    )}
  </div>
);
}

  