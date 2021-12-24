import React, {useState} from "react";
import '../css/Header.scss';
import {
Container, 
Row, 
Col, 
Navbar, 
NavbarBrand, 
NavbarToggler, 
Collapse, 
Nav, 
NavItem, 
NavLink
} from "reactstrap";

function Header () {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const setIsClose = () => setIsOpen(false);

  return (
    <div id="header">
        <Container>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <Navbar light expand="md" className="nav" fixed="top">
              <Col xs={{ size: 1 }} sm={{ size: 1}} md={{ size: 1, offset : 1 }}>
              <NavbarBrand href="">

                </NavbarBrand>
              </Col>
              <Col xs={3} sm={2} md={{ size: 1, offset: 1 }}>
                <NavbarToggler onClick={toggle} navbar />
              </Col>
              <Collapse isOpen={isOpen} navbar className="navbar-collapse">
                <Nav navbar className="navbar-ul">
                  <NavItem className="navItem">
                    <NavLink href="#home" onClick={setIsClose}>HOME</NavLink>
                  </NavItem>
                  <NavItem className="navItem">
                    <NavLink href="#about" onClick={setIsClose}>ABOUT</NavLink>
                  </NavItem>
                  <NavItem className="navItem">
                    <NavLink href="#skills" onClick={setIsClose}>SKILLS</NavLink>
                  </NavItem>
                  <NavItem className="navItem">
                    <NavLink href="#projects" onClick={setIsClose}>PROJECTS</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
           </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header; 