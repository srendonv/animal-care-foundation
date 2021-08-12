import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import AgregarCitas from './../pages/servicesPage/agregarCitas/AgregarCitas'


class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;

    return (

      <div className="container valign-wrapper dashboard-container">        
        
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hola,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                Bienvenido a <b>Animal Care Foundation </b>{" "} 🐶
              </p>
            </h4>
            
          </div>
        </div>

        <div className="row">
          <div className="col s12 center-align">

          <AgregarCitas />
            
          </div>

        </div>

        <div className="row">
          <div className="col s12 center-align">
          <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                marginBottom: "2rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              LOGOUT
            </button>
          </div>
        </div>

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
