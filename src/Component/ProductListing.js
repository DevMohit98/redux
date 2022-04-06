import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import SingleProducts from "./SingleProducts";
import { setProducts } from "../Redux/Actions/Product_action";
const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProduct = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((e) => console.log(e));
    dispatch(setProducts(response.data));
  };
  console.log("Products", products);
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className="ui grid container">
      <SingleProducts />
    </div>
  );
};
export default ProductListing;
