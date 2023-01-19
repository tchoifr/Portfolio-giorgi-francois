import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Stack technique</h2>
                        <p>Voici la liste de mes compétences acquises lors de mes formations et emplois.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="html, css, sass, seo" />
                                <h5>HTML5, CSS3, Bootstrap5, Sass, Référencement SEO</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="php, symfony, android" />
                                <h5>PHP8, Symfony6, Android studio</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="javaScript, react, express" />
                                <h5>JavaScript, JQuery, React.js, Express</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="sql, plSQl" />
                                <h5>SQL, PL/SQL </h5>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="background stack technique" />
    </section>
  )
}
