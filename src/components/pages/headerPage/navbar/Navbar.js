import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { MdPets } from "react-icons/md";
import { FaBars, FaTimesCircle } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
// eslint-disable-next-line
import { Link as ScrollLink } from "react-scroll";
import { HashLink } from "react-router-hash-link";
import { connect } from "react-redux";
import { logoutUser } from "../../../../actions/authActions";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

const Navbar = ({ auth, logoutUser }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const { user } = auth;

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  console.log(auth);
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <nav className="navbar fixed-top">
        <div className="navbar-container container ">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <MdPets className="navbar-icon" />
            Animal Care
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimesCircle /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Servicios
              </Link>
            </li>

            <li className="nav-item">
              <HashLink
                to="/#planes"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Planes
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink
                to="/#beneficios"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Beneficios
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink
                to="/#equipo"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Equipo
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink
                to="/#footer"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Encuéntranos
              </HashLink>
            </li>

            {button ? (
              auth.isAuthenticated ? (
                <NavDropdown
                  title={"Hola " + user.name.split(" ")[0]}
                  id="basic-nav-dropdown"
                >
                  <LinkContainer to="/dashboard">
                    <NavDropdown.Item>Panel</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item href="">Preferencias</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#login" onClick={() => logoutUser()}>
                    SALIR
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                  <li className="nav-btn">
                    <Link to="/register" className="btn-link">
                      <Button buttonStyle="btn--outline">REGISTRARSE</Button>
                    </Link>
                  </li>
                  <li className="nav-btn">
                    <Link to="/login" className="btn-link">
                      <Button buttonStyle="btn--outline">INGRESAR</Button>
                    </Link>
                  </li>
                </>
              )
            ) : auth.isAuthenticated ? (
              <>
                <li className="nav-btn">
                  <Link to="/dashboard" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      onClick={closeMobileMenu}
                    >
                      PANEL
                    </Button>
                  </Link>
                </li>{" "}
                <li className="nav-btn">
                  <Link to="/login" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      onClick={() => {
                        logoutUser();
                        closeMobileMenu();
                      }}
                    >
                      SALIR
                    </Button>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-btn">
                  <Link to="/register" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      onClick={closeMobileMenu}
                    >
                      REGISTRARSE
                    </Button>
                  </Link>
                </li>
                <li className="nav-btn">
                  <Link to="/login" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      onClick={closeMobileMenu}
                    >
                      INGRESAR
                    </Button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </IconContext.Provider>
  );
};
// export default Navbar;
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { logoutUser })(Navbar);
