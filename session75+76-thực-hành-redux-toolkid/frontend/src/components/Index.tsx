import ListProduct from "./Products/ListProduct";
import ListCart from "./Cart/ListCart";

export default function Index() {
  

  return (
    <div className="container">
      <div className="page-header">
        <h1>Shopping Cart</h1>
      </div>
      <div className="row">
        <div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <ListProduct />
          </div>
        </div>
        <div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <ListCart />
          </div>
        </div>
      </div>
    </div>
  );
}
