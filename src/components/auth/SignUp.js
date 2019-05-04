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
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";

function SignUp({ auth, signUp, authError }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    signUp({ email, password, firstName, lastName });
  };

  if (auth.uid) return <Redirect to="/" />;

  return (
    <Container>
      <Form style={{ marginTop: 80 }} onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="FirstName">First Name</Label>
          <Input
            placeholder="John"
            onChange={e => setFirstName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="LastName">Last Name</Label>
          <Input
            placeholder="Doe"
            onChange={e => setLastName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
            onChange={e => setEmail(e.target.value)}
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
          />
        </FormGroup>
        <Button>Sign Up</Button>
        {authError ? (
          <Alert color="danger" style={{ marginTop: 10 }}>
            {authError}
          </Alert>
        ) : null}
      </Form>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
