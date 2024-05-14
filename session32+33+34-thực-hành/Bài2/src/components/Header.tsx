import React from 'react'

export default function Header() {
    const handleCart = () => {

    }
  return (
    <div className='header'>
        <div className='header-left'>
            <span>Trang chủ</span>
            <span>Danh sách sản phẩm</span>
        </div>
        <div className='header-right'>
            <i onClick={handleCart} className="fa-solid fa-cart-shopping"></i>   
            <div className='cirle'>0</div>       
        </div>
    </div>
  )
}
