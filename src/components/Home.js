import React from "react";
import '../css/Home.scss';
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div id="home">
      <Container className="home-container">
        <Row>
          <Col xs={12} sm={12} md={12}>
            <div className="title">
              <div className="font-bold font-07 margin-top-05e">
                안녕하세요
              </div>
              <div className="font-bold font-07 margin-top-05e">
                프론트엔드를 공부하고 있는
                <span style={{color:"#FF7E7E"}}> 김진솔</span> 입니다.
              </div>
              <div className="font-bold font-07 margin-top-05e">노력과 끈기가 저의 장점입니다.</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;