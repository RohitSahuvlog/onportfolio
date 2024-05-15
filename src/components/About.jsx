import React from "react";
import AboutDiv from "../css/About.styled";
import { Fade } from "react-awesome-reveal";
import Aboutme from "../assets/icons/aboutme.svg";
const About = () => {
  return (
    <AboutDiv id="about">
      <div className="conatainerAbout">
        
       
   

        <div className="aboutDesc">
          <Fade direction="left">
            <p className="subTitle" style={{color:"#F2AA4CFF"}}>About me</p>
            <p className="desc">
              A dedicated Full Stack Web developer with a specialized skill set
              that enables me to build robust web applications. I am adept in
              both front-end and back-end and have an eye for performance and
              accuracy.
            </p>
            <p className="desc">
              Full-Stack Web Developer with the ability to learn and collaborate
              in rapidly changing environments and compositions. Worked through
              1000+ hours of Bootcamp structure learning JavaScript, Node.Js,
              React.Js, MongoDB, Express, HTML5, and CSS3.
            </p>
          </Fade>
        </div>
        <Fade direction="left" className="iconContainer">
          <img className="iconAboutMe" src={"https://soumya-ranjan-purohit.vercel.app/static/media/blueTheme-boy.766e140d.svg"} alt="" />
        </Fade>
      </div>
    </AboutDiv>
  );
};

export default About;

// "https://raw.githubusercontent.com/mandarsatam/mandarsatam.github.io/9e9c534e75dd8ac2732b3ec472ce6c2817df9971/static/media/aboutmePic.79439da1.svg"
