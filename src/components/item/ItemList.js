import React from "react";
import { ListGroup } from "reactstrap";
import ItemSummary from "./ItemSummary";

export default function ItemList({ items, setCurrentItem }) {
  return (
    <ListGroup>
      {items &&
        items.map(item => (
          <div key={item.id} onClick={() => setCurrentItem(item.id)}>
            <ItemSummary item={item} />
          </div>
        ))}
    </ListGroup>
  );
}
