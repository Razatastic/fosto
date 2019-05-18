import React, { useState } from "react";
import { ListGroup } from "reactstrap";
import ItemSummary from "./ItemSummary";
import LoadingIcon from "../layout/LoadingIcon";
import ReactSearchBox from "react-search-box";

export default function ItemList({ items, setCurrentItemId }) {
  const [searchValue, setSearchValue] = useState("");

  if (items) {
    return (
      <ListGroup>
        <div style={{ marginTop: 10 }}>
          <ReactSearchBox
            placeholder="Enter an item"
            value={searchValue}
            data={items}
            onChange={e => setSearchValue(e)}
          />
        </div>
        {items &&
          items.map(item => {
            console.log(item.value);
            console.log("Search value", searchValue);

            if (!item.resolved) {
              if (searchValue === "") {
                return (
                  <div onClick={() => setCurrentItemId(item.id)} key={item.id}>
                    <ItemSummary item={item} />
                  </div>
                );
              } else if (item.title.toLowerCase().includes(searchValue)) {
                return (
                  <div onClick={() => setCurrentItemId(item.id)} key={item.id}>
                    <ItemSummary item={item} />
                  </div>
                );
              }
            }
            return null;
          })}
      </ListGroup>
    );
  } else {
    return <LoadingIcon />;
  }
}
