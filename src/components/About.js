import React from "react";
import "../App.scss";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";

function About(){
  library.add(fab, fas, far);
  return (
    <div id="about" className="background-color-white padding-top-btm-5e">
      <div>
        <p className="menu-name font-color-deepred">ABOUT</p>
      </div>
      <Container>
        <Row>
        <Col xs={6} sm={6} md={4} lg={4} className="margin-top-15e" >
        <FontAwesomeIcon icon={["fas", "user-tie"]} className="icon-size" />
            <p className="font-bold font-1H font-color-bl">이름</p>
            <p className="font-bold font-color-lightgray">
              김진솔
            </p>
          </Col>
          <Col xs={6} sm={6} md={4} lg={4} className="margin-top-15e" >
        <FontAwesomeIcon icon={["far", "calendar"]} className="icon-size" />
            <p className="font-bold font-1H font-color-bl">생년월일</p>
            <p className="font-bold font-color-lightgray">
              1998.11.03
            </p>
          </Col>
          <Col xs={6} sm={6} md={4} lg={4} className="margin-top-15e" >
        <FontAwesomeIcon icon={["fas", "map-marker-alt"]} className="icon-size" />
            <p className="font-bold font-1H font-color-bl">주소지</p>
            <p className="font-bold font-color-lightgray">
              대구광역시 수성구
            </p>
          </Col>
          <Col xs={6} sm={6} md={4} lg={4} className="margin-top-15e" >
          <FontAwesomeIcon icon={["fas", "address-book"]} className="icon-size" />
            <p className="font-bold font-1H font-color-bl">전화번호</p>
            <p className="font-bold font-color-lightgray">
            PHONE : 010-8930-1204 <br/>
               TEL : 053-269-0000
            </p> 
          </Col>
          <Col xs={6} sm={6} md={4} lg={4} className="margin-top-15e" >
          <FontAwesomeIcon icon={faEnvelope} className="icon-size" />
            <p className="font-bold font-1H font-color-bl">Email</p>
            <p className="font-bold font-color-lightgray">
              davichi5190@gmail.com <br/> 
              davichi5190@naver.com
            </p>
          </Col>
          <Col xs={6} sm={6} md={4} lg={4} className="margin-top-15e" >
          <FontAwesomeIcon icon={["fab", "github"]} className="icon-size" />
            <p className="font-bold font-1H font-color-bl">Github</p>
            <p className="font-bold font-color-lightgray">
             https://github.com/jjackddoo/
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default About;