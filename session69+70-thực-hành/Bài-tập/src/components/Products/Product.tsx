import React from "react";
import {ProductType} from "../../interface/interface.ts"

export default function Product() {
  return (
    <div className="panel-body" id="list-product">
      {productListLocal.map((product: ProductType) => (
        <div key={product.id}>
          <div className="media product">
            <div className="media-left">
              <a href="#">
                <img
                  className="media-object"
                  src={product.img}
                  alt={product.name}
                />
              </a>
            </div>
            <div className="media-body">
              <h4 className="media-heading">{product.name}</h4>
              <p>{product.introduce}</p>
              <button
                // onClick={() => handleClick(product)}
                style={{
                  width: "100px",
                  height: "30px",
                  backgroundColor: product.quantity < 2 ? "red" : "green",
                  color: "white",
                  fontSize: "18px",
                  border: 0,
                  cursor: "pointer",
                }}
                disabled={product.quantity === 0}
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
                {product.quantity} sản phẩm
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
