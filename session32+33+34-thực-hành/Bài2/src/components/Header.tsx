import React, { useState } from 'react'
import Cart from './Cart'

interface Props {
  listCart: any[]
}

export default function Header({listCart}: Props) {

  const [isCart, setIsCart] = useState<boolean>(false)

    const handleCart = () => {
      setIsCart(!isCart)
    }
  return (
    <div className='header'>
        <div className='header-left'>
            <span>Trang chủ</span>
            <span>Danh sách sản phẩm</span>
        </div>
        <div onClick={handleCart} className='header-right'>
            <i className="fa-solid fa-cart-shopping"></i>   
            <div className='cirle'>{listCart.length}</div>       
        </div>
        {isCart && (<Cart/>)}
    </div>
  )
}
