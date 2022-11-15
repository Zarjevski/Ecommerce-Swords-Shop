import React from 'react'
import CartItem from './CartItem'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'

const Cart = () => {
    const {cartItems} = useSelector((state:RootState)=> state.cart)    
  return (
    <section className='h-screen w-screen flex flex-col'>{cartItems.map((item:any)=>{
        return(<CartItem key={item._id} {...item}/>)
    })}</section>
  )
}

export default Cart