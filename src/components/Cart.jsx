import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseBuyQuantity,
  deleteCartItem,
  increaseBuyQuantity,
} from "../redux/action-creators/productAction";

const Cart = () => {
  const cartItems = useSelector((state) => state.allProducts.cartItems);
  const dispatch = useDispatch();

  const handleCartItemClick = (item, type) => {
    if (type === "add") {
      dispatch(increaseBuyQuantity(item));
    }
    if (type === "minus") {
      dispatch(decreaseBuyQuantity(item));
    }
  };

  const deleteItem = (product) => {
    if (product) {
      dispatch(deleteCartItem(product));
    }
  };

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
                    <div className="cart-action-and-delete d-flex justify-content-between">
                      <div className="cart-action-container">
                        <button
                          type="button"
                          className="cart-minus-btn"
                          onClick={() => handleCartItemClick(product, "minus")}
                          disabled={product.quantity < 2}
                        >
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
                        <button
                          type="button"
                          className="cart-add-btn"
                          onClick={() => handleCartItemClick(product, "add")}
                          disabled={product.quantity > 4}
                        >
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
                      <div>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => deleteItem(product)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                          </svg>
                        </button>
                      </div>
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
