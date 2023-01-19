import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/newimg/cv3.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        
         
          <Col  sm={6} className="text-center text-sm-end  ">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/francois-giorgi-developpeur-web/"><img src={navIcon1} alt="Linkedin" /></a>
              <a href="https://www.facebook.com/francoisdev13"><img src={navIcon2} alt="Facebook" /></a>
              <a href="CV-Francois-Giorgi.pdf" download ><img src={navIcon3} alt="CV" /></a>
            </div>
            <p className="fs-6">©Copyright 2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
