import React from 'react'
import ListProduct from './Products/ListProduct'
import ListCart from './Cart/ListCart'

export default function Index() {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Shopping Cart</h1>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <ListProduct
            // onAddProduct={handleAddProduct}
            // productListCart={productListCart}
            // setProductListCart={setProductListCart}
          />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <ListCart
            // productListCart={productListCart}
            // setProductListCart={setProductListCart}
          />
          {/* {added && <ModalAdded />}
          {updated && <ModalUpdated />} */}
        </div>
      </div>
    </div>
  )
}
