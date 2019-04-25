import React from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function Profile({ auth, profile }) {
  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <Container>
      <p className="text-center display-1" style={{ marginTop: 50 }}>
        {profile.initials}
      </p>
      <p className="text-center display-4" style={{ marginTop: 50 }}>
        Check back soon!
      </p>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Profile);
