import React from "react";

function Item({ id, name, category, atc, setATC, ATC}) {

  const liClass = atc ? "in-cart" : ""
  const buttonClass = atc ? "remove" : "add"

  function handleATCClick() {
    setATC(ATC.map((item) => {
        if (item.id === id) {
          return { ...item, atc: !item.atc };
        }
        return item;
      })
    )
    }

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button id={id} className={buttonClass} onClick={handleATCClick}>{atc ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
