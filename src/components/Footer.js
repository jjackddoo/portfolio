import React from "react";
import { Container, Row, Col } from "reactstrap";

function Footer(){
  return (
    <div id="footer" className="background-color-gray padding-top-btm-1e">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <div>
              <span className="font-color-gray font-07">
                Jinsol Kim{" "}
                <span className="font-color-deepred font-bold">@2021.12.25</span>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;