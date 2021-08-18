import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import AgregarCitas from './../pages/servicesPage/agregarCitas/AgregarCitas'


class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
   
    return (
      
      <div className="dashboard-container">
        <Container id="dashboard" fluid="md" >
          <Row>              
            <Col sm={8}>
              <h4>
                <b>Hola,</b> {user.name.split(" ")[0]}
                <p className="flow-text grey-text text-darken-1">
                  Bienvenido a <b>Animal Care Foundation </b>{" "} 🐶
                </p>
              </h4>  
            </Col>

            <Col  sm={4}>
                <div className="d-grid gap-2 text-center">
                    <Button variant="dark" size="lg" type="submit" onClick={this.onLogoutClick}>
                        LOGOUT
                    </Button>
                </div>
              </Col>
          </Row>

          <Row>
            <Col sm>
              <AgregarCitas />              
            </Col>
          </Row>
        </Container>
      </div>      
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
