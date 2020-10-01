import React, { useEffect, useState } from "react";
import Product from "../component/Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/action/product";
import Loader from "react-loader-spinner";
const ProductList = () => {
  const isLoading = useSelector((state) => state.productReducer.isLoading);
  const allProduct = useSelector((state) => state.productReducer.allProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  if (!isLoading && allProduct)
    return (
      <div className="container-flux">
        <div className="row">
          {allProduct.map((value, index) => {
            return <Product key={index} details={value}></Product>
          })}
        </div>
      </div>
    );
  else {
    return <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />;
  }
};
export default ProductList;
