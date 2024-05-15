import React from 'react'

interface Product {
    id: string
    img: string;
    name: string;
    price: string;
    quantity: number
}

interface Props {
    product: Product
    addCart: (item: Product) => void;
}

export default function Item({product, addCart }: Props) {


    return (
      <div className='product' key={product.id}>
          <div className='img'>
            <img src={product.img} alt={product.name} />
          </div>
          <div className='infoProduct'>
              <h4>{product.name}</h4>
              <span>{product.price} <u>đ</u></span>
              <button onClick={()=>addCart(product)} className='addCart'>
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span>Thêm vào giỏ hàng</span>
              </button>
          </div>
      </div>
    )
}
