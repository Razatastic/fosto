import React from "react";
import { Container, ListGroup } from "reactstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ItemSummary from "../components/item/ItemSummary";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import LoadingIcon from "../components/layout/LoadingIcon";

function Profile({ auth, profile, items }) {
  if (!auth.uid) return <Redirect to="/signin" />;
  console.log(items);
  return (
    <Container>
      <p
        className="text-center display-1"
        style={{ marginTop: 50, marginBottom: 50 }}
      >
        {profile.initials}
      </p>
      {items ? (
        <ListGroup>
          {items &&
            items.map(item =>
              item.authorId === auth.uid ? (
                <ItemSummary
                  item={item}
                  key={item.id}
                  isProfile={true}
                  id={item.id}
                />
              ) : null
            )}
        </ListGroup>
      ) : (
        <LoadingIcon />
      )}
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    items: state.firestore.ordered.items
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "items", orderBy: ["createdAt", "desc"] }])
)(Profile);
