import React from "react";

const Card = ({ imgPath, title, description, price }) => {
  return (
    <div>
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 box-with-shadow">
        <div className="aspect-ratio-box">
          <img class="p-8 rounded-t-lg" src={imgPath} alt="product image" />
        </div>
        <div class="px-5 pb-5">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p class=" italic dark:text-white">{description}</p>
          <span class="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
