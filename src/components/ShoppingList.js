import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items}) {

  const [filterBy, setFilterBy] = useState("All")

  const newItems = items.map((item) => ({ ...item, atc: false }));

  function handleSelect(e) {
    setFilterBy(e.target.value)
  }

  const [ATC, setATC] = useState(newItems)

  const itemsToDisplay = ATC.filter((item) => {

    if (filterBy === "All") {
      return true;
    } else {
      return item.category === filterBy;
    }

  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelect}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => {
          return <Item key={item.id}
            id={item.id}
            name={item.name}
            category={item.category}
            atc={item.atc}
            ATC={ATC}
            setATC={setATC}/>
})}
      </ul>
    </div>
  );
}

export default ShoppingList;
