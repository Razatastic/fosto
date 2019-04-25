import React, { useState } from "react";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert
} from "reactstrap";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

function SignIn({ signIn, authError, auth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    signIn({ email, password });
  };

  if (auth.uid) return <Redirect to="/" />;

  return (
    <Container>
      <Form style={{ marginTop: 100 }} onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
            onChange={e => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="doggo123"
            onChange={e => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        <Button>Sign In</Button>
        <div>
          {authError ? (
            <Alert color="danger" style={{ marginTop: 10 }}>
              Login failed. Please check your email/password and try again!
            </Alert>
          ) : null}
        </div>
      </Form>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
