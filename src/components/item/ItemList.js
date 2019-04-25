import React from "react";
import { ListGroup } from "reactstrap";
import ItemSummary from "./ItemSummary";

export default function ItemList({ items }) {
  return (
    <ListGroup>
      {items && items.map(item => <ItemSummary item={item} />)}
    </ListGroup>
  );
}
