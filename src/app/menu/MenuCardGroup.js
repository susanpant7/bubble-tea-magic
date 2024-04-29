import React from "react";
import OrderCard from "./OrderCard";

const MenuCardGroup = ({ cards }) => {
  return (
    <div>
      <div className="grid mb-8 rounded-lg shadow-sm md:mb-12 md:grid-cols-2">
        {cards.map((card, index) => (
          <div key={index}>
            <figure className="flex flex-col items-center justify-center p-8 text-center rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
              <OrderCard
                imgPath={card.imgPath}
                title={card.title}
                price={card.price}
                description={card.description}
              />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCardGroup;
