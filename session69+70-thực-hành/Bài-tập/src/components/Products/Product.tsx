// Product.tsx

import { ProductType } from "../../interface/interface.ts";
import { useDispatch, useSelector } from "react-redux";
import { actionCart } from "../../action/index.ts";

export default function Product() {
  const products: ProductType[] = useSelector((state: any) => state.productReducer);
  const dispatch = useDispatch();

  const handleClickAdd = (product: ProductType) => {
    dispatch(actionCart("ADDPRODUCT", product));
  };

  return (
    <div className="panel-body" id="list-product">
      {products.map((product: ProductType) => (
        <div key={product.id}>
          <div className="media product">
            <div className="media-left">
              <a href="#">
                <img className="media-object" src={product.img} alt={product.name} />
              </a>
            </div>
            <div className="media-body">
              <h4 className="media-heading">{product.name}</h4>
              <p>{product.introduce}</p>
              <button
                onClick={() => handleClickAdd(product)}
                style={{
                  width: "100px",
                  height: "30px",
                  backgroundColor: product.quantity === 0  ? "red" : "green",
                  color: "white",
                  fontSize: "18px",
                  border: 0,
                  cursor: "pointer",
                }}
              >
                {product.price} USD
              </button>
              <span
                style={{
                  backgroundColor: "LightGray",
                  cursor: "pointer",
                  color: "black",
                }}
                className="price"
              >
                {product.number} sản phẩm
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
