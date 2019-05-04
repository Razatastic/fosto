import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import Footer from "../components/layout/Footer";

function Home({ auth }) {
  if (auth.uid) return <Redirect to="/dashboard" />;
  return (
    <Container className="vertical-center home">
      Never "lose" anything again.
      <Footer />
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Home);
