import React from "react";
import { Card, CardTitle, CardSubtitle, CardText } from "reactstrap";
import moment from "moment";

// Summarized version of item (displayed on dashboard)
const ItemSummary = ({ item }) => {
  const itemColor = item.status === "lost" ? "#FF4136" : "#FF851B";

  return (
    <Card body style={{ margin: 7 }}>
      <CardTitle className="h5" style={{ color: itemColor }}>
        {item.title}
      </CardTitle>
      <CardSubtitle>{item.content}</CardSubtitle>
      <CardText style={{ fontSize: 12, color: "gray" }}>
        {moment(item.date.toDate()).calendar()}
      </CardText>
    </Card>
  );
};

export default ItemSummary;
