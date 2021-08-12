import React, { Component } from "react";
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from "./actions/authActions";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/App.css";

// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import CreateStudent from "./components/utils/createStudent/Create-student.component";
import EditStudent from "./components/utils/Edit-student.component";
import StudentList from "./components/utils/Student-list.component";
// eslint-disable-next-line
import AgregarCitas from "./components/pages/servicesPage/agregarCitas/AgregarCitas";
import Navbar from "./components/pages/headerPage/navbar/Navbar";
// eslint-disable-next-line
import servicesComponent from "./components/utils/ServicesComponent";
// import Login from "./components/Login";
import CustomerCreate from "./components/utils/CustomerCreate";
import Footer from "./components/pages/footerPage/Footer";
import Home from "./components/pages/homePage/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/pages/dashboard/Dashboard";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="App-header">
              <Navbar/>
            </header>
            <Container>
              <Row>
                <Col md={12}>
                  <div className="wrapper">
                    <Switch>
                      <Route exact path="/register" component={Register} />
                      <Route exact path="/login" component={Login} />
                      <Route exact path="/" component={Home} />
                      <Route path="/create-student" component={CreateStudent} />
                      <Route path="/edit-student/:id" component={EditStudent} />
                      <Route path="/student-list" component={StudentList} />
                      <Route path="/customer-create" component={CustomerCreate} />
                      <PrivateRoute 
                        exact
                        path="/dashboard"
                        component={Dashboard}
                      />
                    </Switch>
                  </div>
                </Col>
              </Row>
            </Container>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
