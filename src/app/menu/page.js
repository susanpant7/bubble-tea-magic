"use client";
import React, { useEffect, useState } from "react";
import MenuItems from "./MenuItems";
import MenuCardGroup from "./MenuCardGroup";

const Menu = () => {
  const [listOfMenuCards, setListOfMenuCards] = useState([]);

  useEffect(() => {
    const cardList = MenuItems.map((menuItem) => ({
      id: menuItem.id,
      imgPath: menuItem.img,
      title: menuItem.title,
      description: menuItem.description,
      price: menuItem.price,
    }));
    setListOfMenuCards(cardList);
  }, []);
  return (
    <div className="mt-50">
      <div className="text-container">
        <h1 className="welcome-text animate__animated animate__bounceInDown">
          Please Select From The Following Flavors
        </h1>
      </div>
      <MenuCardGroup cards={listOfMenuCards} />
    </div>
  );
};

export default Menu;
