import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByProductId } from "../redux/action-creators/productAction";

const ViewProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedProduct = useSelector(
    (state) => state.allProducts.currentViewItem[0]
  );

  useEffect(() => {
    dispatch(fetchProductByProductId(id));
  }, [dispatch, id]);

  return (
    <div className="viewProduct">
      <div className="bg-image img-fluid">
        <button
          className="btn btn-light m-3 btn-sm  btn-lg"
          onClick={() => navigate("/")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
          <span className="ml-4"> Go back</span>
        </button>
      </div>
      {selectedProduct && Object.keys(selectedProduct).length ? (
        <>
          <div className="row">
            <div className="col-md-6 img_container text-center">
              <img src={selectedProduct.image} alt="selected_image" />
            </div>
            <div className="col-md-6 view_product_desc">
              <h5 className="card-title product-name">
                {selectedProduct?.name}
              </h5>
              <p className="card-text prod-desc">{selectedProduct?.desc}</p>
              <p className="card-text ">
                <strong className="text-secondary">price: </strong>{" "}
                {selectedProduct?.price}
              </p>
            </div>
          </div>
        </>
      ) : (
        <h6 className="text-danger">Could Not load the requested Item</h6>
      )}
    </div>
  );
};

export default ViewProduct;
