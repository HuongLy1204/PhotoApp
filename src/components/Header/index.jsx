import { Link } from "react-router-dom";
import React from 'react'
import { Col, Container, Nav, NavLink, Row } from "reactstrap";
import "./Header.scss";
function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="header__container">
          <Col xs="auto">
            <img className="header__link header__title"
              width="150px"
              height="auto"
              src="https://logos-world.net/wp-content/uploads/2021/08/Picsart-Logo.png"
            />
          </Col>
          <Col xs="auto">
            <Link
              className="header__link"
              to="/photos"
              activeClassName="header__link--active"
            >
              Redux Project
            </Link>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
export default Header;
