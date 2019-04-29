import React from "react";
import { ListGroup } from "reactstrap";
import ItemSummary from "./ItemSummary";

export default function ItemList({ items, setCurrentItemId }) {
  return (
    <ListGroup>
      {items &&
        items.map(item => (
          <div onClick={() => setCurrentItemId(item.id)} key={item.id}>
            <ItemSummary item={item} />
          </div>
        ))}
    </ListGroup>
  );
}
