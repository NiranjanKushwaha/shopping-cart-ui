import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/action-creators/productAction";
import Product from "./Product";

const ProductListing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios("http://localhost:8000/products");
        if (response && response.data && response.data.length) {
          dispatch(setProducts(response.data));
        } else {
          dispatch(setProducts([]));
        }
      } catch (err) {
        console.log("something went wrong while feching the data");
        dispatch(setProducts([]));
      }
    };

    getAllProducts();
  }, [dispatch]);
  return (
    <div>
      <Product></Product>
    </div>
  );
};

export default ProductListing;
