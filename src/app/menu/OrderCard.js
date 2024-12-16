import React from "react";

// const OrderCard = ({ imgPath, title, description, price }) => {
//   return (
//     <div>
//       <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 box-with-shadow">
//         <div className="aspect-ratio-box">
//           <img className="p-8 rounded-t-lg" src={imgPath} alt="product image" />
//         </div>
//         <div className="px-5 pb-5">
//           <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
//             {title}
//           </h5>
//           <p
//             className="description overflow-y-auto max-h-24 italic dark:text-white">
//             {description}
//           </p>
//           <span className="text-3xl font-bold text-gray-900 dark:text-white">
//             ${price}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

const OrderCard = ({ imgPath, title, description, price }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 box-with-shadow">
      {/* Image with fixed minimum size */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={imgPath || "/api/placeholder/256/192"}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content container */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Title */}
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        {/* Constrained Description with Scrollbar */}
        <div className="h-10 overflow-y-auto mb-2 text-gray-600 text-sm pr-2">
          <div className="pr-2 text-gray-600">{description}</div>
        </div>

        {/* Price */}
        <div className="text-lg font-semibold text-green-600 mt-auto">
          ${price.toFixed(2)}
        </div>

        <div>
          {/* <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Select
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
