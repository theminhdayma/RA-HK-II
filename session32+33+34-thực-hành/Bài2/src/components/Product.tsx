import React from 'react'
import Data from './Data'

interface Product {
    id: string,
    img: string,
    name: string
    price: string,
}

export default function Product() {

    const addCart = () => {

    }
  return (
    <div className='product'>
        <Data/>
        <img src="http://img.websosanh.vn/v2/users/root_product/images/dien-thoai-samsung-galaxy-s20/rs8m65vriptm0.jpg" alt="" />
        <div className='infoProduct'>
            <h4>Điện thoại SamSung Galaxy</h4>
            <span>20.000.000 <u>đ</u></span>
            <button onClick={addCart} className='addCart'>
                <i className="fa-solid fa-cart-shopping"></i>
                <span>Thêm vào giỏ hàng</span>
            </button>
        </div>
    </div>
  )
}
