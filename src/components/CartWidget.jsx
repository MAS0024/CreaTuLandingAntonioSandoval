import React from 'react';
import { FaShoppingBag } from "react-icons/fa";
const CartWidget = () => {
  return (
    <div className="position-relative">
      <FaShoppingBag size={24} color="#fff" />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        0
      </span>
    </div>
  );
};

export default CartWidget;
