import React from "react";

const Filter = ({ filter, menuList }) => {
  return (
    <>
      <div className="btn-container">
        {menuList.map((item) => {
          return (
            <button class="filter-btn" type="button" onClick={() => filter(item)}>{item}</button>
          );
        })}
      </div>
    </>
  );
};

export default Filter;
