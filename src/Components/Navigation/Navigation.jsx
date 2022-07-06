import { useState } from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { HashLink  } from "react-router-hash-link";

function Navigation() {
  const [extendedNavbar, setExtendedNavbar] = useState(false);
  const [active, setActive] = useState(false);



  return (
    <div className="navigation">
      <nav>
        <NavLink className="NavLink" to="/">
          <h1>RAUNAK GURUD</h1>
        </NavLink>
        <div className="navigation__toggle-menu">
          <NavLink
            className="NavLink toggle-button"
            to="/"
            onClick={() => {
              setExtendedNavbar((curr) => {
                if (curr) {
                  setActive(true);
                  var element = document.getElementById("myDIV");
                  element.classList.remove("active");
                  console.log(active)
                } else {
                  setActive(false);
                  element = document.getElementById("myDIV");
                  element.classList.add("active");
                }
                return !curr;
              });
            }}
          >
            {extendedNavbar ? (
              <>
                <span className="cross"></span>
                <span className="cross"></span>
              </>
            ) : (
              <>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </>
            )}
          </NavLink>
          <div id="myDIV" className="menu">
            <ul className="nav-links">
              <li>
                <HashLink className="NavLink" to="/#about">
                  ABOUT
                </HashLink>
              </li>
              <li>
                <HashLink className="NavLink" to="/#skills">
                  SKILLS
                </HashLink>
              </li>
              <li>
                <HashLink className="NavLink" to="/#projects">
                  PROJECTS
                </HashLink>
              </li>
              <li>
                <HashLink className="NavLink" to="/#contact">
                  CONTACT
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
