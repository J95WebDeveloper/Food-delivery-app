import React, { useState } from 'react'
import { useAuth } from '../context/AuthProvider'
import EmptyCart from '../components/EmptyCart'
import CartItems from '../components/CartItems'
import { HOC } from '../components/HOC'



function Cart() {

  const { totalQuantity } = useAuth()
  return (
    <div>
       {totalQuantity > 0 ? <CartItems /> : <EmptyCart /> }  
    </div>
  )
}

export default HOC(Cart)