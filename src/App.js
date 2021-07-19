import React from "react";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/App.css";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import CreateStudent from "./components/create-student.component";
import EditStudent from "./components/edit-student.component";
import StudentList from "./components/student-list.component";
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">  
        <Navbar />
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateStudent} />                
                <Route path="/create-student" component={CreateStudent} />
                <Route path="/edit-student/:id" component={EditStudent} />
                <Route path="/student-list" component={StudentList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>     
    </div>
  </Router>);
}
export default App;