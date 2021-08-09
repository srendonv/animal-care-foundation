import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {backHost} from '../config/env';

export default class CustomerCreate extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    // this.onChangeStudentName = this.onChangeStudentName.bind(this);
    // this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    // this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeCustomerName = this.onChangeCustomerName.bind(this);
    this.onChangeCustomerLastName = this.onChangeCustomerLastName.bind(this);
    this.onChangeCustormerTypeID = this.onChangeCustormerTypeID.bind(this);
    this.onChangeCustomerNumberID = this.onChangeCustomerNumberID.bind(this);
    this.onChangeCustormerEmail = this.onChangeCustormerEmail.bind(this);
    this.onChangeCustomerAddress = this.onChangeCustomerAddress.bind(this);
    this.onChangeCustormerPhone = this.onChangeCustormerPhone.bind(this);

    // this.on


    // Setting up state
    this.state = {
      name: '',
      last_name: '',
      number_id: '',
      type_id: '',
      email: '',
      address: '',
      phone: '',
    }
  }

  onChangeCustomerName(e) {
    this.setState({ name: e.target.value })
  }
  onChangeCustomerLastName(e) {
    this.setState({ last_name: e.target.value })
  }
  onChangeCustormerTypeID(e) {
    this.setState({ type_id: e.target.value })
  }
  onChangeCustomerNumberID(e) {
    this.setState({ number_id: e.target.value })
  }
  onChangeCustormerEmail(e) {
    this.setState({ email: e.target.value })
  }
  onChangeCustomerAddress(e) {
    this.setState({ address: e.target.value })
  }
  onChangeCustormerPhone(e) {
    this.setState({ phone: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const customerObject = {
      name: this.state.name,
      last_name: this.state.last_name,
      type_id: this.state.type_id,
      number_id: this.state.number_id,
      address: this.state.address,
      phone: this.state.phone,
      email: this.state.email,
    };

    axios.post(`${backHost}/customers/customer-create`, customerObject)
    .then(res => console.log(res.data));

    this.setState({
      name: "",
      last_name: "",
      type_id: "",
      number_id: "",
      address: "",
      phone: "",
      email: "",
    });
  }

  render() {
    return (
    <div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeCustomerName} />
        </Form.Group>
        <Form.Group controlId="Last_Name">
          <Form.Label> Last Name</Form.Label>
          <Form.Control type="text" value={this.state.last_name} onChange={this.onChangeCustomerLastName} />
        </Form.Group>
        <Form.Group controlId="Number">
          <Form.Label>Number Identification</Form.Label>
          <Form.Control type="text" value={this.state.number_id} onChange={this.onChangeCustomerNumberID} />
        </Form.Group>
        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeCustormerEmail} />
        </Form.Group>
        <Form.Group controlId="Text">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" value={this.state.address} onChange={this.onChangeCustomerAddress} />
        </Form.Group>
        <Form.Group controlId="Phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" value={this.state.phone} onChange={this.onChangeCustormerPhone} />
        </Form.Group>
        <Button variant="dark" size="lg" block="block" type="submit">
          Create Customer
        </Button>
      </Form>
    </div>);
  }
}
