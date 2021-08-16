import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Auth.css"

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
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
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="form-wrapper auth-container" id="auth">
        <div>
          <h4>
            <b>Usuario registrado</b>
          </h4>
        </div>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
              // id="email"
              type="email"
              className={classnames("", {
                invalid: errors.email || errors.emailnotfound,
              })}
            />
            <span className="red-text">
              {errors.email}
              {errors.emailnotfound}
            </span>
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
                invalid: errors.password || errors.passwordincorrect,
              })}
            />
            <span className="red-text">
              {errors.password}
              {errors.passwordincorrect}
            </span>
          </Form.Group>
          <div className="col s12">
            <p className="grey-text text-darken-1">
              No tienes una cuenta? <Link to="/register">Regístrate</Link>
            </p>
          </div>
          <Button size="lg" block="block" type="submit">
            Iniciar sesión
          </Button>
        </Form>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(Login);
