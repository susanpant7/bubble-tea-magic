import React from "react";

const Spinner = ({ loadingText = 'Loading...' }) => {
    return (
      <div className="flex flex-col items-center justify-center space-y-4">
        <div 
          className="animate-spin w-12 h-12 border-4 border-blue-100 border-t-4 border-t-blue-500 rounded-full"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
        <span className="text-gray-600 text-sm font-medium">
          {loadingText}
        </span>
      </div>
    );
  };

export default Spinner;
