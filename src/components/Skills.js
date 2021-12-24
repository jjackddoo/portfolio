import React from "react";
import '../css/Skills.scss';
import "../App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, ProgressBar} from "react-bootstrap";
import {
  faHtml5,
  faBootstrap,
  faSass,
  faCss3,
  faJs,
  faReact,
  faNode

} from "@fortawesome/free-brands-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";

function Skills() {
  library.add(fab);
  return (
    <div id="skills" className="background-color-gray padding-top-btm-5e">
        <div> 
        <p className="menu-name font-color-deepred">SKILLS</p>
      </div>
      <Container>
        <Row>
          <Col xs={6} sm={6} md={3} className="margin-top-3e" >
            <FontAwesomeIcon icon={faHtml5} className="icon-size" />
            <p className="font-bold font-color-gray">HTML5</p>
            <ProgressBar striped variant="success" now={90} />
          </Col>
          <Col xs={6} sm={6} md={3} className="margin-top-3e">
            <FontAwesomeIcon icon={faCss3} className="icon-size" />
            <p className="font-bold font-color-gray">CSS3</p>
            <ProgressBar striped variant="success" now={80} />
          </Col>
          <Col xs={6} sm={6} md={3} className="margin-top-3e">
            <FontAwesomeIcon icon={faJs} className="icon-size" />
            <p className="font-bold font-color-gray">JavaScript</p>
            <ProgressBar striped variant="warning" now={70} />
          </Col>
          <Col xs={6} sm={6} md={3} className="margin-top-3e">
            <FontAwesomeIcon icon={faBootstrap} className="icon-size" />
            <p className="font-bold font-color-gray">BootstraP</p>
            <ProgressBar striped variant="warning" now={60} />
          </Col>
          <Col xs={6} sm={6} md={3} className="margin-top-3e">
            <FontAwesomeIcon icon={faSass} className="icon-size" />
            <p className="font-bold font-color-gray">Sass</p>
            <ProgressBar striped variant="warning" now={70} />
          </Col>
          <Col xs={6} sm={6} md={3} className="margin-top-3e">
            <FontAwesomeIcon icon={faReact} className="icon-size" />
            <p className="font-bold font-color-gray">React</p>
            <ProgressBar striped variant="danger" now={40} />
          </Col>
          <Col xs={6} sm={6} md={3} className="margin-top-3e">
          <FontAwesomeIcon icon={["fab", "php"]} className="icon-size" />
            <p className="font-bold font-color-gray">PHP</p>
            <ProgressBar striped variant="warning" now={60} />
          </Col>
          <Col xs={6} sm={6} md={3} className="margin-top-3e">
            <FontAwesomeIcon icon={faNode} className="icon-size" />
            <p className="font-bold font-color-gray">Node.js</p>
            <ProgressBar striped variant="danger" now={30} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills;