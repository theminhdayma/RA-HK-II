import { useDispatch, useSelector } from "react-redux";
import swal from 'sweetalert';
import { Product } from "../../interface";
import { useEffect, useState } from "react";
import { getListProduct } from "../../service/product.service";
import { addProduct } from "../../service/cart.service";

export default function ListProduct() {
  const [number, setNumber] = useState<number>(1);
  const listProduct: Product[] = useSelector(
    (state: any) => state.products.product
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListProduct());
  }, [dispatch]);

  const handleAdd = async (product: Product) => {
    try {
      await dispatch(addProduct({ ...product, quantity: number })).unwrap();
      swal("Sản phẩm đã được thêm vào giỏ hàng!");
    } catch (error: any) {
      swal(error.message || "Có lỗi xảy ra");
    }
  };

  const ChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(parseInt(e.target.value));
  };

  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h1 className="panel-title">List Products</h1>
      </div>
      <div className="panel-body" id="list-product">
        {listProduct.map((product: Product, index: number) => (
          <div key={index}>
            <div className="media product">
              <div className="media-left">
                <a href="#">
                  <img
                    className="media-object"
                    src={product.image}
                    alt="Sample Product"
                  />
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading text-3xl">{product.name}</h4>
                <p>{product.description}</p>
                <input
                  onChange={ChangeQuantity}
                  className="border border-gray-600"
                  value={number}
                  type="number"
                  min="1"
                  max={product.total}
                />
                <button
                  onClick={() => handleAdd(product)}
                  style={{
                    width: "100px",
                    height: "30px",
                    backgroundColor: "green",
                    color: "white",
                    border: 0,
                    cursor: "pointer",
                  }}
                  disabled={product.total === 0}
                >
                  ADD CART
                </button>
                <span
                  style={{
                    backgroundColor: "LightGray",
                    cursor: "pointer",
                    color: "black",
                  }}
                  className="price"
                >
                  {product.price} USD
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
