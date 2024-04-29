import React from "react";

const CardWithTitleAndDescription = ({ title, description }) => {
  return (
    <div>
      <div class="card dark:bg-gray-800 dark:text-white transition-all duration-300 ease-in-out transform hover:scale-105 m-4 box-with-shadow">
        <div class="px-6 py-4">
          <h2 class="text-xl font-bold">{title}</h2>
          <p class="text-gray-200 dark:text-gray-400 mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardWithTitleAndDescription;
