import React from "react";

const MenuCard = ({ menuData }) => {
  // console.log(menuData);
  return (
    <>
        {menuData.map((curElem) => {

          const{ img, title,price,desc} = curElem; //#(destructuring) by this insted of writing curElem.img etc we can just go with the object name
          return (
            <>
              <div class="item">
                <img src={img} alt="" class="photo" />
                <div class="menu-info">
                  <div class="discription">
                    <h2>{title}</h2>
                    <p class="price">{price}</p>
                  </div>
                  <p class="menu-desc">{desc}</p>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default MenuCard;
