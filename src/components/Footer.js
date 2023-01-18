import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/newimg/cv3.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/francois-giorgi-developpeur-web/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/francoisdev13"><img src={navIcon2} alt="Icon" /></a>
              <a href="CV-Francois-Giorgi.pdf" download ><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2022</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
