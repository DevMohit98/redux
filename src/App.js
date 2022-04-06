import React from "react";
import Header from "./Component/Header";
import ProductListing from "./Component/ProductListing";
import ProductDetails from "./Component/ProuctDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" exact element={<ProductListing />} />
            <Route
              path="/product/:productId"
              exact
              element={<ProductDetails />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
};
export default App;
