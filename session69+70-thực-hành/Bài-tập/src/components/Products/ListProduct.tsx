import React from 'react'
import { ProductType } from '../../interface/interface'
import Product from './Product'

interface Props {
  listProduct: ProductType[]
}

export default function ListProduct({listProduct} : Props) {
  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h1 className="panel-title">List Products</h1>
      </div>
      <Product
        // listProduct = {listProduct}
        // onAddProduct={onAddProduct}
        // productListCart={productListCart}
        // setProductListCart={setProductListCart}
        // productListLocal={productListLocal}
        // setProductListLocal={setProductListLocal}
      />
    </div>
  )
}
