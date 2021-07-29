import React from "react";
import Helmet from "react-helmet";
import Nav from "../components/subcomponents/navbar";
import NavbarMobile from "../components/subcomponents/navbar-mobile";

import "../styles/theme.scss";

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="TechTogether Boston 2021 Virtual"
      meta={[
        {
          name: "description",
          content:
            "",
        },
        {
          name: "keywords",
          content: "hackathon, boston, hackers, diversity",
        },
      ]}
    />
    <Nav />
    <NavbarMobile />
    <div>{children}</div>
  </div>
);

export default Layout;
