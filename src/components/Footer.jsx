import React from "react";
import FooterCon from "../css/Footer.styled";
import {
  SiLinkedin,
  SiGmail,
  SiGithub,
  SiTwitter,
  SiHashnode,
} from "react-icons/si";
import { Fade } from "react-awesome-reveal";
import { BsTelephoneFill } from "react-icons/bs";
const Footer = () => {
  return (
    <FooterCon id="footer">
      <p className="subTitle" style={{color:"#F2AA4CFF"}}>Contact</p>
      <div className="footerCon">
        <Fade direction="up">
          <div>
            <a
              href="https://www.linkedin.com/in/rohit-sahu-3a0406179"
              target={"_blank"}
              className="links"
            >
              <span>
                <SiLinkedin />
              </span>
              <span>Linkedin</span>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/RohitSahuvlog"
              target={"_blank"}
              className="links"
            >
              <span>
                <SiGithub />
              </span>
              <span>Github</span>
            </a>
          </div>
          <div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sahu86744@gmail.com.com"
              className="links"
              target={"_blank"}
            >
              <span>
                <SiGmail />
              </span>
              <span>sahu86744@gmail.com</span>
            </a>
          </div>
          {/* <div>
            <a
              href="https://twitter.com/Gautamgohil07"
              target={"_blank"}
              className="links"
            >
              <span>
                <SiTwitter />
              </span>
              <span>Twitter</span>
            </a>
          </div> */}
          <div>
            <a href="#" aria-disabled className="links">
              <span>
                <BsTelephoneFill />
              </span>
              <span>+91 7247351447</span>
            </a>
          </div>
          {/* <div>
            <a
              href="https://gautamgohil.hashnode.dev/"
              target={"_blank"}
              className="links"
            >
              <span>
                <SiHashnode />
              </span>
              <span>Hashnode</span>
            </a>
          </div> */}
        </Fade>
      </div>
      <div className="credits">
        <p>
          Built with ❤️ by <span>Rohit Sahu</span> © 2022
        </p>
      </div>
    </FooterCon>
  );
};

export default Footer;
