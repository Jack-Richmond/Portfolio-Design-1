import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import cloudworld from "../assets/img/cloudworld.png"
import Tube2Trail from "../assets/img/tube2trail.png"
import Proxima from "../assets/img/proxima.png"
import HomeAway from "../assets/img/homeaway.png"
import chikara from "../assets/img/chikara.png"
import BookToBuyer from "../assets/img/booktobuyer.png"

import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {

  const projects = [
    {
      title: "Tube2Trail",
      description: "Design & Development",
      imgUrl: cloudworld,
    },
    {
      title: "World in the Clouds / Digital Portfolio",
      description: "Design & Development",
      imgUrl: Tube2Trail,
    },
    {
      title: "HomeAway",
      description: "Design & Development",
      imgUrl: Proxima,
    },
    {
      title: "Proxima",
      description: "Design & Development",
      imgUrl: HomeAway,
    },
    {
      title: "Ethereal",
      description: "Design & Development",
      imgUrl: chikara,
    },
    {
      title: "BookToBuyer",
      description: "Design & Development",
      imgUrl: BookToBuyer,
    },
  ];

 return (
  <section className="project" id="projects">
    <Container>
      <Row>
        <Col size={12}>
        <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
        <h2>Projects</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
          <Tab.Container id="projects-tabs" defaultActiveKey="first">
        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
          <Nav.Item>
            <Nav.Link eventKey="first">Tab One</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Tab Two</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third">Tab Three</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
          <Tab.Pane eventKey="first">
            <Row>
              {
                projects.map((project, index) => {
                  return (
                  <ProjectCard
                  key={index}
                  {...project}
                  />
                  )
                })
              }
            </Row>
          </Tab.Pane>
          <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
          <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
        </Tab.Content>
        </Tab.Container>
        </div>}
        </TrackVisibility>
        </Col>
      </Row>
    </Container>
    <img className="background-image-right" src={colorSharp2} alt="Background Shape" ></img>
  </section>
 )
}
