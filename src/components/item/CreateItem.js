import React, { useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import createItem from "../../store/actions/itemActions";
import { Redirect } from "react-router-dom";
import Geosuggest from "react-geosuggest";

function CreateItem({ createItem, auth, history }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  console.log(location);
  const handleSubmit = e => {
    e.preventDefault();
    createItem({ title, description, date, status });
    history.push("/dashboard");
  };

  if (!auth.uid) return <Redirect to="/signin" />;

  return (
    <Container>
      <Form style={{ marginTop: 100 }} onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="Title">Item</Label>
          <Input
            placeholder="iPhone 5"
            required
            onChange={e => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Content">Description</Label>
          <Input
            placeholder="Dropped off at the circulation desk on the first floor of the Brooklyn College library"
            type="textarea"
            required
            onChange={e => setDescription(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Date">Date</Label>
          <Input
            required
            type="date"
            name="date"
            id="date"
            placeholder="date placeholder"
            onChange={e => setDate(new Date(e.target.value))}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Location">Location</Label>
          <Geosuggest
            style={{ width: 2000 }}
            placeholder="Start typing!"
            onSuggestSelect={e => {
              setLocation({
                lat: [e.location.lat][0],
                lng: [e.location.lng][0]
              });
            }}
            location={new window.google.maps.LatLng(53.558572, 9.9278215)}
            radius="20"
          />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              required
              name="radio2"
              onChange={e => setStatus("lost")}
            />
            Lost
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              name="radio2"
              onChange={e => setStatus("found")}
            />
            Found
          </Label>
        </FormGroup>

        <Button style={{ marginTop: 20 }}>Submit</Button>
      </Form>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createItem: item => dispatch(createItem(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateItem);
