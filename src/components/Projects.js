import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import escapeGame from "../assets/img/newimg/escapeGame.PNG";
import eauService from "../assets/img/newimg/eauServiceDeBebe.PNG";
import euphoria from "../assets/img/newimg/euphoria.PNG";
import natam from "../assets/img/newimg/natam.PNG";
import chanvria from "../assets/img/newimg/chanvria.PNG";
import reservia from "../assets/img/imgScolaire/reservia.png";
import ohmyfood from "../assets/img/imgScolaire/ohmyfood.png";
import Lachouetteagence from "../assets/img/imgScolaire/LaChouetteAgence.png";
import orinoco from "../assets/img/imgScolaire/orinoco.png";
import piment from "../assets/img/imgScolaire/piment.jpg";
import groupomania from "../assets/img/imgScolaire/groupomania.png";
import enchere from "../assets/img/imgScolaire/enchere.jpg";
import scolaire from "../assets/img/imgScolaire/scolaire.png";
import oc from "../assets/img/formation/oc.jpg";
import eni from "../assets/img/formation/ENIEcole.jpg";


export const Projects = () => {

  const projects = [
    {
      id: 1,
      title: "Jeu pédagogique",
      description: "Développement full stack, React.js, Symfony",
      imgUrl: escapeGame,
    },
    {
      id: 2,
      title: "eauServiceDeBébé",
      description: "Développement full stack, React.js, Symfony",
      imgUrl: eauService,
    },
    {
      id: 3,
      title: "Euphoria",
      description: "Développement full stack, React.js, Symfony",
      imgUrl: euphoria,
    },
    {
      id: 4,
      title: "Natam",
      description: "Développement front-end, JavaScript",
      imgUrl: natam,
    },
    {
      id: 5,
      title: "Chanvria store",
      description: "Prestashop",
      imgUrl: chanvria,
    },
    
  ];
  const nameRoute = (id) =>{
    switch (id) {
      case 1:
        return "/";
        case 2:
        return "https://www.eauservicedebebe.com/";
        case 3:
        return "https://www.euphoriamarseille.com/";
        case 4:
        return "https://natam.fr/";
        case 5:
        return "https://chanvriastore.com/";
        default:
          return"/";
    }
  };


  const projectsScool = [
    {
      id: 8,
      title: "Gestion scolaire",
      description: "Développement full stack, Symfony, Twig",
      imgUrl: scolaire,
    },
    {
      id: 7,
      title: "Enchère en ligne",
      description: "Développement full stack, Java",
      imgUrl: enchere,
    },
    {
      id: 6,
      title: "Groupomania",
      description: "Développement full stack, React.js, Express",
      imgUrl: groupomania,
    },
    {
      id: 5,
      title: "Sauce piquante",
      description: "Développement back-end, Express",
      imgUrl: piment,
    },
    {
      id: 4,
      title: "Orinoco",
      description: "Développement front-end dynamique, JavaScript",
      imgUrl: orinoco,
    },
    {
      id: 3,
      title: "La chouètte agence",
      description: "Référencement SEO",
      imgUrl: Lachouetteagence,
    },
    {
      id: 2,
      title: "OhMyFood",
      description: "Développement front-end static, HTML5, Sass, Bootstrap5",
      imgUrl: ohmyfood,
    },
    {
      id: 1,
      title: "Réservia",
      description: "Développement front-end static, HTML5, CSS3",
      imgUrl: reservia,
    },
  ];

  const formations = [
    
    {
      id: 2,
      title: "Eni école informatique",
      description: "Formation DWWM (Développeur Web et Web Mobile), Java, Java POO, Java SE, Java JEE Html5, Css3, JavaScript MySQL, PL/SQL Php, symfony, Android studio",
      imgUrl: eni,
    },
    {
      id: 1,
      title: "Openclassrooms",
      description: "Formation essentiellement front-end, Html5, Css3, Sass Référencement SEO JavaScript, JQuery Express, MariaDB, React.js ",
      imgUrl: oc,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projets et formations</h2>
                <p>Voici la liste de mes projets et formations</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projet Professionnel</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Projets Scolaire</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Mes formations</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard 
                                key={index} to={nameRoute(index.id)}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                    {
                          projectsScool.map((projectsScool, index) => {
                            return (
                              <ProjectCard 
                                key={index} 
                                {...projectsScool}
                                />
                            )
                          })
                        }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                    {
                          formations.map((formations, index) => {
                            return (
                              <ProjectCard 
                                key={index} 
                                {...formations}
                                />
                            )
                          })
                        }
                        </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
