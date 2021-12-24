
import React from "react";
import "../App.scss";
import { Container, Row, Col, UncontrolledCarousel } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { fas} from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";


const carousel_popolpage = [
  {
    src: "./img/1-1.png"
  },
  {
    src: "./img/1-2.png"
  },
  {
    src: "./img/1-3.png"
  }
];


const carousel_apipage = [
  {
    src: "./img/2-1.png"
  },
  {
    src: "./img/2-2.png"
  },
  {
    src: "./img/2-3.png"
  }
];


function Projects(){
  library.add(fab, fas, far);
  return (
    <div id="projects" className="padding-top-btm-5e">
      <div>
        <p className="menu-name font-color-deepred">PROJECTS</p>
      </div>
      <Container >
      <Row>
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <div>
              <p className="font-bold-900 font-2">개인 포트폴리오 사이트</p>
              <div className="padding-top-btm-1e">
                <p className="font-bold">              
                <FontAwesomeIcon icon={["far", "calendar"]}
                    className="icon-size-1e icon-color " 
                  />
                   <span className="padding-left-right-1e"> 2021.11.01 ~ 2021.12.25 (2개월)</span>
                </p>
                <p className="font-bold">              
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="icon-size-1e icon-color " 
                  />
                   <span className="padding-left-right-1e">개인 프로젝트</span>
                </p>
                <p className="font-bold">              
                  <FontAwesomeIcon
                    icon={["fas", "tools"]}
                    className="icon-size-1e icon-color " 
                  />
                   <span className="padding-left-right-1e">HTML5 / JS / SCSS / REACT / BOOTSTRAP</span>
                </p>
                <p className="font-bold">              
                  <FontAwesomeIcon
                    icon={["fas", "tasks"]}
                    className="icon-size-1e icon-color " 
                  />
                   <span className="padding-left-right-1e">메인화면, 프로필, 기술, 프로젝트 페이지 구현</span>
                </p>
                <p className="font-bold">              
                  <FontAwesomeIcon
                    icon={["far","bookmark"]}
                    className="icon-size-1e icon-color " 
                  />
                   <span className="padding-left-right-1e">리액트와 부트스트랩을 이용한 개인 포트폴리오 페이지입니다.<br/> </span>
                </p>
              </div>
              <div className="padding-top-1e">
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <UncontrolledCarousel items={carousel_popolpage} />
          </Col>
        </Row>
        <hr/>
      <Row>
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <div>
              <p className="font-bold-900 font-2">관광지 출력 페이지</p>
              <div className="padding-top-btm-1e">
                <p className="font-bold">              
                <FontAwesomeIcon icon={["far", "calendar"]}
                    className="icon-size-1e icon-color " 
                  />
                   <span className="padding-left-right-1e"> 2021.09.01 ~ 2021.12.01 (4개월)</span>
                </p>
                <p className="font-bold">              
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="icon-size-1e icon-color " 
                  />
                   <span className="padding-left-right-1e">4명 / 팀프로젝트</span>
                   <FontAwesomeIcon
                    icon={["fas","percentage"]}
                    className="icon-size-1e icon-color " 
                  />
                  <span className="padding-left-right-1e">기여도 40%</span>
                </p>
                <p className="font-bold">              
                  <FontAwesomeIcon
                    icon={["fas", "tools"]}
                    className="icon-size-1e icon-color " 
                  />
                   <span className="padding-left-right-1e">HTML5 / JS / CSS / PHP / MYSQL / 공공데이터 API</span>
                </p>
                <p className="font-bold">              
                  <FontAwesomeIcon
                    icon={["fas", "tasks"]}
                    className="icon-size-1e icon-color " 
                  />
                   <span className="padding-left-right-1e"> 목록 출력, 필터링, 상세 날씨, 길찾기, SMS </span>
                </p>
                <p className="font-bold">              
                  <FontAwesomeIcon
                    icon={["far","bookmark"]}
                    className="icon-size-1e icon-color " 
                  />
                   <span className="padding-left-right-1e">관광지 API를 이용한 관광지 리스트 출력 페이지입니다. <br/> </span>
                </p>
              </div>
              <div className="padding-top-1e">
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <UncontrolledCarousel items={carousel_apipage} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;