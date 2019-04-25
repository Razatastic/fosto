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
import { resetPass } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import PasswordReset from "./PasswordReset";

function SignIn({ signIn, authError, auth, resetPass, resetError }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

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
        <Button style={{ marginLeft: 10 }} onClick={() => setModalOpen(true)}>
          Reset Password
        </Button>
        <div>
          {authError ? (
            <Alert color="danger" style={{ marginTop: 10 }}>
              Login failed. Please check your email/password and try again!
            </Alert>
          ) : null}
        </div>
      </Form>
      <PasswordReset
        resetError={resetError}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        resetPass={resetPass}
      />
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
    resetError: state.auth.resetError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds)),
    resetPass: email => dispatch(resetPass(email))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
