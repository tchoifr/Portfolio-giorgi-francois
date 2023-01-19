import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
 
  
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Bienvenue sur mon Portfolio</span>
                <h1>{`Je suis Développeur Full stack`}</h1>
                  <p>En recherche active d'un poste sur les Frameworks Symfony/PHP et React.js. Extrêmement motivé pour atteindre les objectifs et challenges qui me sont fixés, les défis ne me font pas peur. De plus, je suis autonome et m'adapte facilement en remote pour collaborer en équipe. N'hésitez pas à consulter mes projets et à me contacter ! Bonne journée.</p>
                
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header espace"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
