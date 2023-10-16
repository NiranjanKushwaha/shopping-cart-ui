import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartProduct } from "../redux/action-creators/productAction";
import { useGlobalToast } from "../contextApi/ToastProvider";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const products = useSelector((state) => state.allProducts.products);
  const cartItems = useSelector((state) => state.allProducts.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showSuccessToast, showWarningToast } = useGlobalToast();

  const addToCart = (product) => {
    if (
      cartItems &&
      cartItems.length &&
      cartItems.some((cartItem) => cartItem.id === product.id)
    ) {
      showWarningToast("Item already added in the cart");
      return;
    }
    product["quantity"] = 1;
    dispatch(addToCartProduct(product));
    showSuccessToast("Item added to cart successfully");
  };

  const viewProduct = (product) => {
    console.log(product);
    navigate(`/viewProduct/${product.id}`);
  };

  if (products && products.length) {
    return (
      <div className="row product">
        {products.map((product) => {
          return (
            <React.Fragment key={product.id}>
              <div className="card">
                <img
                  src={product?.image}
                  className="card-img-top"
                  alt="product_image"
                />
                <div className="card-body">
                  <h5 className="card-title product-name">{product?.name}</h5>
                  <p className="card-text prod-desc">{product?.desc}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className="card-text ">
                        <strong className="text-secondary">price: </strong>{" "}
                        {product?.price}
                      </p>
                    </div>
                    <div>
                      <button
                        className="btn btn-primary"
                        onClick={() => addToCart(product)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-plus-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-info view-product btn"
                  onClick={() => viewProduct(product)}
                >
                  view
                </div>
              </div>
            </React.Fragment>
          );
        })}
        ;
      </div>
    );
  }
  return <div>No products</div>;
};

export default Product;
