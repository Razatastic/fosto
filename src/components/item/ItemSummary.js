import React from "react";
import { Card, CardTitle, CardSubtitle, CardText } from "reactstrap";
import moment from "moment";

// Summarized version of item (displayed on dashboard)
const ItemSummary = ({ item }) => {
  const styles = item.status === "lost" ? "red" : "green";

  return (
    <Card body style={{ margin: 7 }}>
      <CardTitle className="h4" style={{ color: styles }}>
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
