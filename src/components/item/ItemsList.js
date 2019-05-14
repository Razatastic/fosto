import React from "react";
import { ListGroup } from "reactstrap";
import ItemSummary from "./ItemSummary";
import LoadingIcon from "../layout/LoadingIcon";

export default function ItemList({ items, setCurrentItemId }) {
  if (items) {
    return (
      <ListGroup>
        {items &&
          items.map(item =>
            !item.resolved ? (
              <div onClick={() => setCurrentItemId(item.id)} key={item.id}>
                <ItemSummary item={item} />
              </div>
            ) : null
          )}
      </ListGroup>
    );
  } else {
    return <LoadingIcon />;
  }
}
