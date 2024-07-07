import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import H_Component11 from "./components/H_Component11";

function AppRouter() {
  return (
    <div className="p-0 m-0 overflow-x-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/footer" element={<H_Component11 />} />
          {/* <Route path="/single" element={<SingleProductView />} /> */}
          {/* <Route path="/shop" element={<ShopPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default AppRouter;
