import React from "react";

const OrderCard = ({ imgPath, title, description, price }) => {
  return (
    <div>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 box-with-shadow">
        <div className="aspect-ratio-box">
          <img className="p-8 rounded-t-lg" src={imgPath} alt="product image" />
        </div>
        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className=" italic dark:text-white">{description}</p>
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
