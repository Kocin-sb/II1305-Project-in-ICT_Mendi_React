/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="https://www.mendi.io/">
              Mendi
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={()=>window.open("https://www.mendi.io/privacy/")} href="#">
              Data Privacy
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={()=>window.open("https://www.facebook.com/mendi.io/")} href="#">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={()=>window.open("https://www.instagram.com/mendi.io/")} href="#">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={()=>window.open("https://twitter.com/Mendi_io")} href="#">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
        © {new Date().getFullYear()} Mendi - All Rights Served+
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
