import React from "react";
import { SkillsDiv } from "../css/Skills.styled";
import { FaReact } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import {
  SiJavascript,
  SiReact,
  SiReactrouter,
  SiMongodb,
  SiExpress,
  SiStyledcomponents,
  SiMaterialui,
  SiTypescript,
  SiPostman,
  SiRedux,
  SiGithub,
  SiGit,
  SiCypress,
  SiNodedotjs,
  SiCss3,
  SiHtml5,
  SiNetlify,
  SiHeroku,
  SiJson
} from "react-icons/si";
import { SiSocketdotio, SiRedis, SiPostgresql, } from "react-icons/si";

import { VscJson } from "react-icons/vsc";

const Skills = () => {
  return (
    <SkillsDiv id="skills">
      <p className="title" style={{ color: "#F2AA4CFF" }}>Skills</p>

      <div className="mainContainer">
        <div className="container">
          <div className="FrontEnd">
            <p className="subTitle" style={{ color: "#F2AA4CFF" }}>Frontend</p>
            <div className="frontEndSKills">
              <ul className="skillsList">
                <Fade direction="up" duration={700}>
                  <li>
                    <span>
                      <SiReact />
                    </span>
                    <p>React Js</p>
                  </li>

                  <li>
                    <span>
                      <SiJavascript />
                    </span>
                    <p>Javascript</p>
                  </li>

                  <li>
                    <span>
                      <SiCss3 />
                    </span>
                    <p>CSS3</p>
                  </li>
                  <li>
                    <span>
                      <SiHtml5 />
                    </span>
                    <p>HTML5</p>
                  </li>
                  <li>
                    <span>
                      <SiTypescript />
                    </span>
                    <p>Typescript</p>
                  </li>
                  <li>
                    <span>
                      <SiRedux />
                    </span>
                    <p>Redux</p>
                  </li>

                  <li>
                    <span>
                      <SiStyledcomponents />
                    </span>
                    <p>Styled-Components</p>
                  </li>
                  <li>
                    <span>
                      <SiReactrouter />
                    </span>
                    <p>React-router</p>
                  </li>
                </Fade>
              </ul>
            </div>
          </div>
          <div className="FrontEnd">
            <p className="subTitle" style={{ color: "#F2AA4CFF" }}>Backend</p>
            <div className="frontEndSKills">
              <ul className="skillsList">
                <Fade direction="up" duration={700}>
                  <li>
                    <span>
                      <SiMongodb />
                    </span>
                    <p>MongoDB</p>
                  </li>
                  <li>
                    <span>
                      <SiExpress />
                    </span>
                    <p>Express Js</p>
                  </li>
                  <li>
                    <span>
                      <SiNodedotjs />
                    </span>
                    <p>Node.js</p>
                  </li>
                  <li>
                    <span>
                      <SiSocketdotio />
                    </span>
                    <p>Socket.io</p>
                  </li>
                  <li>
                    <span>
                      <SiRedis />
                    </span>
                    <p>Redis</p>
                  </li>
                  <li>
                    <span>
                      <SiPostgresql />
                    </span>
                    <p>PostgreSQL</p>
                  </li>


                </Fade>
              </ul>
            </div>
          </div>
        </div>
        <div className="tools">
          <p className="subTitle" style={{ color: "#F2AA4CFF" }}>Tools</p>
          <div className="toolsInSkills">
            <ul className="skillsList">
              <Fade direction="up" duration={700}>
                <li>
                  <span>
                    <SiGit />
                  </span>
                  <p>Git</p>
                </li>
                <li>
                  <span>
                    <SiCypress />
                  </span>
                  <p>Cypress</p>
                </li>
                <li>
                  <span>
                    <SiGithub />
                  </span>
                  <p>Github</p>
                </li>
                <li>
                  <span>
                    <SiPostman />
                  </span>
                  <p>Postman</p>
                </li>
                <li>
                  <span>
                    <SiNetlify />
                  </span>
                  <p>Netlify</p>
                </li>
                <li>
                  <span>
                    <SiHeroku />
                  </span>
                  <p>Heroku</p>
                </li>
                <li>
                  <span>
                    <VscJson />
                  </span>
                  <p>Jeson-Server</p>
                </li>
              </Fade>
            </ul>
          </div>
        </div>
      </div>
    </SkillsDiv>
  );
};

export default Skills;
