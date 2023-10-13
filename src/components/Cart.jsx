import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.allProducts.cartItems);
  console.log(cartItems);
  return (
    <div className="cart">
      {cartItems && cartItems.length ? (
        cartItems.map((product) => {
          return (
            <React.Fragment key={product.id}>
              <div className="cart-card">
                <div>
                  <img
                    src={product?.image}
                    className="card-img-top"
                    alt="product_image"
                  />
                </div>
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
                    <div className="d-flex justify-content-center align-items-center cart-action-container">
                      <button type="button" className="cart-minus-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="36"
                          height="36"
                          fill="currentColor"
                          className="bi bi-dash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                        </svg>
                      </button>
                      <input
                        type="text"
                        disabled
                        value={product.quantity}
                        className="cart-item-count"
                      />
                      <button type="button" className="cart-add-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="36"
                          height="36"
                          fill="currentColor"
                          className="bi bi-plus"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })
      ) : (
        <strong>No Cart items found</strong>
      )}
      ;
    </div>
  );
};

export default Cart;
