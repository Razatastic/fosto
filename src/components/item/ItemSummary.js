import React from "react";
import { Card, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import moment from "moment";
import { resolveItem } from "../../store/actions/itemActions";
import { connect } from "react-redux";

// Summarized version of item (displayed on dashboard)
const ItemSummary = ({ item, isProfile, resolveItem, id }) => {
  let itemColor;
  if (item.resolved) {
    itemColor = "green";
  } else {
    item.status === "lost" ? (itemColor = "#FF4136") : (itemColor = "#FF851B");
  }

  return (
    <Card body style={{ margin: 7 }}>
      <CardTitle className="h5" style={{ color: itemColor }}>
        {item.title}
      </CardTitle>
      <CardSubtitle>{item.content}</CardSubtitle>
      <CardText style={{ fontSize: 12, color: "gray" }}>
        {moment(item.date.toDate()).calendar()}
      </CardText>
      {isProfile && !item.resolved ? (
        <Button onClick={() => resolveItem(id)}>Mark as Resolved</Button>
      ) : null}
    </Card>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    resolveItem: item => dispatch(resolveItem(item))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ItemSummary);
