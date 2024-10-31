"use client";
import React, { useEffect, useState } from "react";
import { fetchMenuFromDrive } from "./MenuItems";
import MenuCardGroup from "./MenuCardGroup";
import Spinner from "../components/spinners/Spinner";

const Menu = () => {
  const [listOfMenuCards, setListOfMenuCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      var menuCards = await fetchMenuFromDrive();
      setListOfMenuCards(menuCards);
      setIsLoading(false);
    }
    fetchData();
  }, []);
  return (
    <div className="mt-50">
      <div className="text-container">
        <h1 className="welcome-text animate__animated animate__bounceInDown">
          Please Select From The Following Flavors
        </h1>
      </div>
      {isLoading && (
        <div style={{ height: "100vh" }} className="full-screen">
          <Spinner loadingText="Loading the menu items ..." />
        </div>
      )}
      {!isLoading && <MenuCardGroup cards={listOfMenuCards} />}
    </div>
  );
};

export default Menu;
