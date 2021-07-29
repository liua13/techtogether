import React, { useState } from "react";
import DynamicLink from "./dynamic-link.js";
import NavLinks from "../../data/nav-links.json";
import techtogetherWhite from "../../images/techtogetherWhite.png";
import NavHamburger from "../../images/nav-hamburger.png";
import Exit from "../../images/exit_icon.png";

const NavMobile = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  function toggleMenu() {
    setNavOpen(!isNavOpen);
  }

  return (
    // nav mobile crap here

    <nav className={`nav-mobile ${isNavOpen ? "opened" : "closed"}`}>
      <a id="mlh-trust-badge" style={{
        display: "block", maxWidth: "100px", minWidth: "60px", position: "fixed", left: "0px", top: "0", width: "10%", zIndex: "10000"
      }} href="https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=white" target="_blank"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-white.svg" alt="Major League Hacking 2021 Hackathon Season" style={{ width: "100%" }} /></a>

      <div className="nav-mobile__top">
        <DynamicLink to="/" className="nav_logo">
          <img className="nav__logo" src={techtogetherWhite} alt="oops" style={{ marginLeft: "75px" }} />{" "}
        </DynamicLink>
        <button onClick={toggleMenu} className="nav-mobile__toggle-btn">
          <i className={isNavOpen ? "opened" : "closed"} />
          <img
            src={NavHamburger}
            alt="oops"
            style={isNavOpen ? { display: "none" } : { display: "block" }}
          />
          <img
            src={Exit}
            alt="oops"
            style={isNavOpen ? { display: "block" } : { display: "none" }}
          />
        </button>
      </div>
      <ul
        className="nav-mobile__list"
        style={isNavOpen ? { display: "block" } : { display: "none" }}
      >
        {NavLinks.map((link, index) => {
          return (
            <li key={`nav-item-${index}`} className="nav-mobile__item">
              <DynamicLink
                className="nav-mobile__link"
                to={link.path}
                onClick={toggleMenu}
              >
                {link.name}
              </DynamicLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;