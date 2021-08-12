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

const Navbar = ({auth}) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(auth.isAuthenticated);

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
    <>
      Hola {auth.isAuthenticated ? "True" : "False"}
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <input
            onChange={(e) => {
              setIsAuthenticated(e.target.value);
            }}
          ></input>
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <MdPets className="navbar-icon" />
              Animal Care
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimesCircle /> : <FaBars />}
              {isAuthenticated}
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

              {/* <li className='nav-item'>
                <Link
                  to='/create-student'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  CrearST
                </Link>
                </li>

                <li className='nav-item'>
                <Link
                  to='/edit-student'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  EditarST
                </Link>
                </li>

                <li className='nav-item'>
                <Link
                  to='/student-list'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  ListarST
                </Link>
                </li> 
              */}

              <li className="nav-item">
                <HashLink
                  to="/#footer"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Encuéntranos
                </HashLink>
              </li>

              {auth.isAuthenticated ? (
                <Link to="/login" className="btn-link">
                  <Button buttonStyle="btn--outline">SALIR</Button>
                  {/* <Button buttonStyle="btn--outline">SALIR</Button> */}
                </Link>
              ) : (
                <Link to="/login" className="btn-link">
                  <Button buttonStyle="btn--outline">INGRESAR</Button>
                </Link>
              )}

              <li className="nav-btn">
                {button ? (
                  <Link to="/login" className="btn-link">
                    <Button buttonStyle="btn--outline">INGRESAR</Button>
                  </Link>
                ) : (
                  <Link to="/login" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      onClick={closeMobileMenu}
                    >
                      INGRESAR
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};
// export default Navbar;
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps)(Navbar);
