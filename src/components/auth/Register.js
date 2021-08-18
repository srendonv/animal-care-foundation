import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import "./Auth.css"

// bootstrap components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    this.props.registerUser(newUser, this.props.history);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="form-wrapper auth-container">
        <div>
          <h4>
            <b>Nuevo usuario</b>
          </h4>
        </div>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              onChange={this.onChange}
              value={this.state.name}
              error={errors.name}
              // id="name"
              type="text"
              className={classnames("", {
                invalid: errors.name,
              })}
            />
            <span className="red-text">{errors.name}</span>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
              // id="email"
              type="email"
              className={classnames("", {
                invalid: errors.email,
              })}
            />
            <span className="red-text">{errors.email}</span>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              // id="password"
              type="password"
              className={classnames("", {
                invalid: errors.password,
              })}
            />
            <span className="red-text">{errors.password}</span>
          </Form.Group>

          <Form.Group controlId="password2">
            <Form.Label>Confirmar contraseña</Form.Label>
            <Form.Control
              onChange={this.onChange}
              value={this.state.password2}
              error={errors.password2}
              // id="password2"
              type="password"
              className={classnames("", {
                invalid: errors.password2,
              })}
            />
            <span className="red-text">{errors.password2}</span>
          </Form.Group>
          <div className="col s12">
            <p className="grey-text text-darken-1">
              Ya tienes una cuenta? <Link to="/login">Ingresa</Link>
            </p>
          </div>
          <Button size="lg" block="block" type="submit">
            Registrate
          </Button>
        </Form>

        
      </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
