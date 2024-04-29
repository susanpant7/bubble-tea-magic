"use client";
import React, { useEffect, useState } from "react";
import CardGroup from "../components/cards/CardGroup";
import MenuItems from "./MenuItems";

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
    <div>
      <div className="text-container">
        <h1 className="welcome-text animate__animated animate__bounceInDown">
          Please Select From The Following Flavors
        </h1>
      </div>
      <CardGroup cards={listOfMenuCards} />
    </div>
  );
};

export default Menu;
