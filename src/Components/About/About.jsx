import "./about.css";
import image from "../../Assets/Image/mypic1.png";

function About() {
  return (
    <div className="container" id="about">
      <div className="about__container-left">
        <div className="about__text-wrap">
          <h3>About ME</h3>
          <p>
            I am a computer Science student learning and innovating new stuff online.
            An passionate and Curious individual playing around with different and
            new technology
            <br /><br /> 
            A FullStack web developer, who can help you in building your dream project.
          </p>
        </div>
      </div>
      <div className="about__container-right">
        <div className="about__image-container">
          <img className="about-image" src={image} alt="Raunak Gurud" />
        </div>
      </div>
    </div>
  );
}

export default About;
