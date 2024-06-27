import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../interface";
import { useEffect } from "react";
import { getAllCart } from "../../service/cart.service";

export default function ListCart() {
  const listCart: Product[] = useSelector((state: any) => state.carts.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCart());
  }, [dispatch]);

  const totalQuantity = listCart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <div className="panel panel-danger">
      <div className="panel-heading">
        <h1 className="panel-title">Your Cart</h1>
      </div>
      <div className="panel-body">
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: "4%" }}>STT</th>
              <th>Name</th>
              <th style={{ width: "15%" }}>Price</th>
              <th style={{ width: "4%" }}>Quantity</th>
              <th style={{ width: "25%" }}>Action</th>
            </tr>
          </thead>
          <tbody id="my-cart-body">
            {listCart.map((cart: Product, index: number) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{cart.name}</td>
                <td>{cart.price} USD</td>
                <td>
                  <input
                    name="cart-item-quantity-1"
                    type="number"
                    value={cart.quantity}
                    readOnly
                  />
                </td>
                <td>
                  <a className="label label-info update-cart-item">Update</a>
                  <a
                    className="label label-danger delete-cart-item"
                    style={{
                      cursor: "pointer",
                      marginLeft: "10px",
                    }}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot id="my-cart-footer">
            <tr>
              <td colSpan={4}>
                {totalQuantity > 0 ? (
                  <span>
                    Có <b>{totalQuantity}</b> sản phẩm trong giỏ hàng
                  </span>
                ) : (
                  "Chưa có sản phẩm trong giỏ hàng"
                )}
              </td>
              <td colSpan={2} className="total-price text-left">
                {listCart.reduce(
                  (total, product) => total + product.price * product.quantity,
                  0
                )}
                USD
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
