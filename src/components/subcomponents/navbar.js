import React from "react";
// import { Link } from "gatsby"
import DynamicLink from "./dynamic-link";
import NavLinks from "../../data/nav-links.json";
import "../../styles/nav.scss";
import techtogetherWhite from "../../images/techtogetherWhite.png"

const Nav = () => (
  <nav className="nav">
    <DynamicLink to="/" className=" nav__logo">
        <img
            className="img-fluid "
            src={techtogetherWhite}
            alt="oops"
            style={{ marginLeft: "5px" }}
        />
    </DynamicLink>
    <ul className="nav__list">
      {NavLinks.map((link, index) => {
        return (
          <li key={`nav-item-${index}`} className="nav__item">
            <DynamicLink className="nav__link" to={link.path}>
              {link.name}
            </DynamicLink>
          </li>
        );
      })}
    </ul>

    <a
      id="mlh-trust-badge"
      style={{
        display: "block",
        maxWidth: "100px",
        minWidth: "60px",
        position: "fixed",
        right: "50px",
        top: "0",
        width: "10%",
        zIndex: "10000",
        marginLeft: "9px",
        paddingLeft: "15px",
        paddingRight: "15px",
      }}
      href="https://mlh.io/seasons/2022/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=white"
      target="_blank"
    >
      <img
        src="https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-white.svg"
        alt="Major League Hacking 2022 Hackathon Season"
        style={{ width: "100%" }}
      />
    </a>
  </nav>
);

export default Nav;