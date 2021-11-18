import React, { useState } from "react";
import "../components/style.css";
import Menu from "../components/menuApi.js"; //menu-api
import MenuCard from "../components/MenuCard.js"; // menu-card element
import Filter from "../components/Filter.js";

const menuFilter = Menu.reduce(
  function (value, item) {
    if (!value.includes(item.category)) {
      value.push(item.category);
    }
    return value;
  },
  ["all"]
);
console.log(menuFilter);

// hook
// console.log(Menu);
const Restaurent = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(menuFilter);

  const filterItem = (category) => {
    if (category === "all") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <div className="menu">
        <h1 class="head">
          our <span>menu</span>
        </h1>
        <Filter filter={filterItem} menuList={menuList} /> {/* components */}
        <div className="menu-items">
          <MenuCard menuData={menuData} /> {/* menuDat iss a ananomus name */}
        </div>
      </div>
    </>
  );
};

export default Restaurent;
