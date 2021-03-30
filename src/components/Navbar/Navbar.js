import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logout from "../Auth/Logout";
import { getLocalUser } from "../../context/AuthContext.utils";
import { useAuth } from "../../context/AuthContext.utils";
import "./Navbar.css";

export function Navbar() {
  const [user1, setUser1] = React.useState("");
  const [click, setClick] = useState(false);
  const { user } = useAuth();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  React.useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = () => {
    setUser1(getLocalUser());
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            MTCF <i className="fas fa-typo3    " />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars "} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            {user.isLogged ? (
              <React.Fragment>
                <li className="nav-item">
                  <Link
                    to="/motocycles"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Lista de Motocicletas
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/motocycles/create"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Crear tu Motocicleta
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/myMotocicles"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Mis Motocicletas
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/goodbye"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    <Logout />
                  </Link>
                </li>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <li className="nav-item">
                  <Link
                    to="/motocycles"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                     Lista de Motocicletas
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/signup"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Signup
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/login"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Login
                  </Link>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}



