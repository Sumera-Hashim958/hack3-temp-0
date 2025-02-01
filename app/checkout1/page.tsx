"use client"
import { Product } from '@/types/products'
import React, { useEffect, useState } from 'react'
import { getCartItems } from '../actions/actions'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Swal from 'sweetalert2'
import { format } from 'path'
import { client } from '@/sanity/lib/client'

const Chaeckout = () => {

  const [cartItems, setCartItems] = useState<Product[]>([])
  const [discount, setDiscount] = useState<number>(0)
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
  })

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    zipCode: false,
    city: false,
  })

  useEffect(() => {
    setCartItems(getCartItems())
    const appliedDiscount = localStorage.getItem("appliedDiscount")
    if(appliedDiscount){
      setDiscount(Number(appliedDiscount))
    }
  },[])

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.stockLevel,0)
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
      setFormValues({
        ...formValues,
        [e.target.id]: e.target.value
      })
    }

    const validateForm =() => {
      const errors = {
        firstName: !formValues.firstName,
        lastName: !formValues.lastName,
        email: !formValues.email || !formValues.email.includes("@"),
        // email: !formValues.email.includes("@"),
        phone: !formValues.phone,
        address: !formValues.address,
        zipCode: !formValues.zipCode,
        city: !formValues.city,
      };
      setFormErrors(errors)
      return Object.values(errors).every((error) => !error);
    }
    const handlePlaceOrder = async () => {
      Swal.fire({
        title: 'Processing your order..',
        text: 'Please wait a moment',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Proceed'
      }).then ((result) => {
        if(result.isConfirmed) {
          if(validateForm()){
            localStorage.removeItem("appliedDiscount");
            Swal.fire(
              "Success!",
              "your order has been successfully processed",
              "success"
            );
          } else {
            Swal.fire (
              "Error!",
              "Please fill in all the fields before proceeding",
              "error"
            )
          }
        }
      });
      const orderData = {
        _type: 'order',
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        address: formValues.address,
        city: formValues.city,
        zipCode: formValues.zipCode,
        phone: formValues.phone,
        email: formValues.email,
        cartItems: cartItems.map(item => ({
          _type: 'reference',
          _ref: item._id,
        })),
        total: subTotal,
        discount: discount,
        orderData: new Date().toISOString()
      };
      try {
        await client.create(orderData)
        localStorage.removeItem("appliedDiscount")
      } catch (error) {
        console.error("error creating order", error)
      }
    }
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="flex items-center gap-2 py-4">
          <Link href="/cart1" className="text-[#666666] hover:text-black transition text-sm">Cart1</Link>
          <ChevronRightIcon className="w-4 h-4"/>
          <span>Checkout</span>
        </nav>
        </div>
      </div>
      <div className="max-w-6xl max-auto px-4 sm:px-6 lg-px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border rounded-lg p-6 space-y-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item._id} className="flex items-center gap-4 py-3 border-b">
                  <div className="w-16 h-16 rounded overflow-hidden">
                    {item.image && (
                      <Image
                      src={urlFor(item.image).url()}
                      alt="image"
                      width={50}
                      height={50}
                      className="object-cover w-full h-full"/>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-xs text-gray-500">Quantity: {item.stockLevel}</p>
                  </div>
                  <p>${item.price * item.stockLevel}</p>
                  </div>
              ))
            ) : (
              <p className="text-xs font-medium">No items in Cart</p>
            )}
            <div className="text-right pt-4">
              <p className="text-sm">subTotal:<span className="font-medium">${subTotal}</span></p>
              <p className="text-sm">Discount:<span className="font-medium">${discount}</span></p>
              <p className="text-lg font-semibold">Total:<span>${subTotal.toFixed(2)}</span></p>
            </div>
          </div>
          <div className="bg-white border rounded-lg p-6 space-y-6">
            <h2 className="text-xl font-semibold">Billing Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label>First Name</label>
                <input
                type="text"
                id="firstName"
                placeholder='Enter your First Name'
                value={formValues.firstName}
                onChange={handleInputChange}
                className="border"
                />
                {formErrors.firstName && (
                  <p className="text-sm text-red-500">First Name is required</p>
                )}
              </div>

              <div>
                <label>Last Name</label>
                <input
                type="text"
                id="lastName"
                placeholder='Enter your Last Name'
                value={formValues.lastName}
                onChange={handleInputChange}
                />
                {formErrors.lastName && (
                  <p className="text-sm text-red-500">Last Name is required</p>
                )}
              </div>
              <div>
                <label>Address</label>
                <input
                type="text"
                id="address"
                placeholder='Enter your address'
                value={formValues.address}
                onChange={handleInputChange}
                />
                {formErrors.address && (
                  <p className="text-sm text-red-500">Address is required</p>
                )}
              </div>
              <div>
                <label>Zip Code</label>
                <input
                type="text"
                id="zipCode"
                placeholder='Enter your Zip Code'
                value={formValues.zipCode}
                onChange={handleInputChange}
                />
                {formErrors.zipCode && (
                  <p className="text-sm text-red-500">Zip Code is required</p>
                )}
              </div>
              <div>
                <label>City</label>
                <input
                type="text"
                id="city"
                placeholder='Enter your City Name'
                value={formValues.city}
                onChange={handleInputChange}
                />
                {formErrors.city && (
                  <p className="text-sm text-red-500">City is required</p>
                )}
              </div>
              <div>
                <label>Contact</label>
                <input
                type="text"
                id="phone"
                placeholder='Enter your Contact Number'
                value={formValues.phone}
                onChange={handleInputChange}
                />
                {formErrors.phone && (
                  <p className="text-sm text-red-500">Contact required</p>
                )}
              </div>
              <div>
                <label>Email</label>
                <input
                type="text"
                id="email"
                placeholder='Enter your Email'
                value={formValues.email}
                onChange={handleInputChange}
                />
                {formErrors.email && (
                  <p className="text-sm text-red-500">Email is required</p>
                )}
              </div>
              <button className="w-full h-12 bg-purple-700 hover:bg-purple-500 text-white"onClick={handlePlaceOrder}>Place Order</button>
            </div>
          </div>

        </div>
         
      </div>
    </div>
  )
}

export default Chaeckout
