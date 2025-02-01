'use client';

import { Product } from '@/types/products';
import React, { useEffect, useState } from 'react';
import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions';
import Swal from 'sweetalert2';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this item.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!',
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire('Removed!', 'Item has been removed.', 'success');
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.stockLevel + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.stockLevel > 1) {
      handleQuantityChange(id, product.stockLevel - 1);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.stockLevel, 0).toFixed(2);
  };
const router = useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: 'Proceed to Checkout',
      text: 'Please review your cart before checkout.',
      icon: 'question',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Yes, Proceed',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Success!', 'Your order has been successfully placed.', 'success');
        router.push("/checkout1")
        setCartItems([]);
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between border p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center space-x-4">
                 {item.image && (
                    <Image
                    src={urlFor(item.image).url()}
                    className="w-16 h-16 object-cover rounded-md"
                    alt="image"
                    width={200}
                    height={200}
                  />
                 )}
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleDecrement(item._id)}
                    className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    
                  </button>
                  <span className="font-semibold">{item.stockLevel}</span>
                  <button
                    onClick={() => handleIncrement(item._id)}
                    className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => handleRemove(item._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="p-6 bg-gray-50 border rounded-lg shadow-sm">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>
            <p className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${calculateTotal()}</span>
            </p>
            <button
              onClick={handleProceed}
              className="w-full mt-4 py-2 px-4 bg-blue-500 text-purple rounded-lg hover:bg-blue-600"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
