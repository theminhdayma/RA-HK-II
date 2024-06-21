import ListProduct from "./Products/ListProduct";
import ListCart from "./Cart/ListCart";
import { ProductType } from "../interface/interface";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Index() {
  const [listProduct, setListProduct] = useState<ProductType[]>([]);
  const [cartProduct, setCartProduct] = useState<ProductType[]>([]);

  const loadData = () => {
    const productDataJSON = localStorage.getItem("listProduct");
    if (productDataJSON) {
      setListProduct(JSON.parse(productDataJSON));
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const cartProduct = localStorage.getItem("cartProduct");
    if (cartProduct) {
      setCartProduct(JSON.parse(cartProduct));
    }
  }, []);

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="text-5xl">Shopping Cart</h1>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <ListProduct
            listProduct={listProduct}
            // onAddProduct={handleAddProduct}
            // productListCart={productListCart}
            // setProductListCart={setProductListCart}
          />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <ListCart
            cartProduct={cartProduct}
            // productListCart={productListCart}
            // setProductListCart={setProductListCart}
          />
          {/* {added && <ModalAdded />}
          {updated && <ModalUpdated />} */}
        </div>
      </div>
    </div>
  );
}
