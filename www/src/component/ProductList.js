import React, { useEffect, useState } from "react";
import Product from "../component/Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/action/product";
import Loader from "react-loader-spinner";
import Pagination from "@material-ui/lab/Pagination";

const ProductList = () => {
  const isLoading = useSelector((state) => state.productReducer.isLoading);
  let allProduct = useSelector((state) => state.productReducer.allProduct);
  const dispatch = useDispatch();
  const pageLimit = 10;
  const [currentPage, setCurentPage] = useState(1);
  const firstItem = (currentPage - 1) * 10;
  const lastItem = pageLimit * currentPage;
  let totalPage = undefined;

  if (Array.isArray(allProduct)) {
    totalPage = Math.ceil(allProduct.length / 10);
    allProduct = allProduct.slice(firstItem, lastItem);
  }

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const handleChangePage = (event, value) => {
    setCurentPage(value);
  };

  if (!isLoading && allProduct)
    return (
      <div className="container product">
        <div className="row mt-3">
          {allProduct.map((value, index) => {
            return <Product key={index} details={value}></Product>;
          })}
        </div>
        <Pagination
          count={totalPage}
          page={currentPage}
          onChange={handleChangePage}
          size="large"
        />
      </div>
    );
  else {
    return (
      <Loader
        className={"loader"}
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
      />
    );
  }
};
export default ProductList;
