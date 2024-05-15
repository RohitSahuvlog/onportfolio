import React, { useEffect, useState } from "react";
import BannerCon from "../css/Banner.styled";
import Typewriter from "typewriter-effect";
import { BsLinkedin, BsGithub } from "react-icons/bs";
// import Avatar2 from "../assets/image/profilePic.png";
import Avatar from "../../Publics/Rohit.png";

const Banner = () => {
  return (
    <BannerCon>
      <div className="bannerContainer">
      <div className="imageContainer">
          <img src={Avatar} alt="" className="avatar" />
        </div>
        <div className="typeWirter">
          <div className="introMyself">
            <p className="heading">Hi, I am Rohit Sahu,</p>
            <div className="subHeading">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Web Developer !",
                    "Frontend Developer !",
                    "MERN Stack",
                    "A tech enthuastic !",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 200,
                }}
              />
            </div>
            <p className="tagLine">
              An enthusiastic Full Stack Web Developer with a strong set of
              technical as well as non-technical skills and a dedication towards
              creating useful and interactive web applications.
            </p>
            <div className="typeButtons">
              <button class="learn-more">
                <a
                  href="https://drive.google.com/file/d/1RFpRCquN1FRyMY8yDIUpjhLYq5u-S-mT/view?usp=sharing"
                  target={"_blank"}
                >
                  <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                  </span>
                  <span class="button-text">Resume</span>
                </a>
              </button>
              {/* <button>Resume</button> */}
            </div>
            <div className="socialIconContainer">
              <a
                href="https://www.linkedin.com/in/rohit-sahu-3a0406179"
                target={"_blank"}
              >
                <BsLinkedin className="socialIcons" />
              </a>
              <a href="https://github.com/RohitSahuvlog" target={"_blank"}>
                <BsGithub className="socialIcons" />
              </a>
            </div>
          </div>
        </div>

       
      </div>
    </BannerCon>
  );
};

export default Banner;
