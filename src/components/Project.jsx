import React, { useState } from "react";
import ProjectsCon from "../css/Projects.styled";
import Singleproject from "./Signleproject";
import Avatar from "../../Publics/weatherpic.png";
let projectData = [
  {
    id: 1,
    heroImage: "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1715019226/jvhqavqlx0fomsxg7g9g.png",
    title: "Cugate Music System",
    desc: "Cugate AG is a German big data company founded by Hanspeter 'Memo' Rhein, focusing on music system innovations.",
    git: "https://github.com/RohitSahuvlog/Freelance-cugate.org",
    deployed: "https://cugate.org/",
    techStack: "React JS | Redux | Chakra ui |NodeJS |MongoDB | Express JS | Redux | Javascript | HTML 5 | CSS 3 |GitHub | Bootstrap",
    // blog: "",
  },

  {
    id: 2,
    heroImage: "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1715019912/f3ky0yg1fmibwstigdtq.png",
    title: "AI & Biometrics Innovation",
    desc: "a leading AI and biometrics company driving innovation at the intersection of technology and identity verification",
    git: "https://github.com/RohitSahuvlog/lenscorp.ai",
    deployed: "https://ailenscorp.netlify.app/",
    techStack: "React JS | Redux | Chakra ui |NodeJS |MongoDB | Express JS | Redux | Javascript | HTML 5 | CSS 3 |GitHub | Bootstrap",
    // blog: "",
  },

  {
    id: 2,
    heroImage: "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1715021721/hvqeicohohzfhwrrwruu.png",
    title: "Mid-Asia Routes",
    desc: "Explore the majestic landscapes and rich cultural heritage of Mid-Asia with our comprehensive travel guides.",
    git: "https://github.com/https-github-com-RohitSahuvlog/Travelasiaroutes",
    deployed: "https://midasiaroutes.com/",
    techStack: "React JS | Redux | Chakra ui |NodeJS |MongoDB | Express JS | Redux | Javascript | HTML 5 | CSS 3 |GitHub | Bootstrap",
    // blog: "",
  },


  {
    id: 2,
    heroImage:
      "https://raw.githubusercontent.com/sanjaykumarverma01/aberrant-coast-299/main/ScreenShots/Homepage%201.PNG",
    title: "Cronometer",
    desc: "Cronometer is the most accurate, comprehensive nutrition tracking app on earth. Unlike other apps on the market, there nutritional data is curated from verified, accurate sources.",

    git: "https://github.com/RohitSahuvlog/coronometer",
    deployed: "https://adorable-fudge-a736e0.netlify.app/",
    techStack: "React JS | Redux | Chakra ui |NodeJS |MongoDB | Express JS | Redux | Javascript | HTML 5 | CSS 3 |GitHub | Bootstrap",
    // blog: "",
  },
  {
    id: 3,
    heroImage:
      "https://github.com/KaustubhBadve/Naukri/blob/main/Screenshots/LandingPage.png?raw=true",
    title: "Naukri",
    desc: "Naukri.com is a website where we can search and apply for jobs available in India",
    team: "A collaborative project, built in 6 days by a team of 6 members.",
    git: "https://github.com/KaustubhBadve/Naukri",
    deployed: "https://naukriclone98.vercel.app/",
    techStack:
      "HTML5 | CSS3 | React Js | Redux | React-Thunk | Styled-Components | Javascript",
    // blog: ""

  },
  {
    id: 3,
    heroImage:
      "https://github.com/KaustubhBadve/Naukri/blob/main/Screenshots/LandingPage.png?raw=true",
    title: "Naukri",
    desc: "Naukri.com is a website where we can search and apply for jobs available in India",
    team: "A collaborative project, built in 6 days by a team of 6 members.",
    git: "https://github.com/KaustubhBadve/Naukri",
    deployed: "https://naukriclone98.vercel.app/",
    techStack:
      "HTML5 | CSS3 | React Js | Redux | React-Thunk | Styled-Components | Javascript",
    // blog: ""

  },
  {
    id: 4,
    heroImage:
      "https://user-images.githubusercontent.com/97459016/180615235-c1c7e4ba-0a3e-4800-9368-b6c15d442752.jpeg",
    title: "Everhour",
    desc: "Everhour is the best time tracking tool for use with Basecamp",
    team: "A collaborative project, built in 6 days by a team of 6 members.",
    git: "https://github.com/RohitSahuvlog/viable-argument-168",
    deployed: "https://everhour-clone.netlify.app/",
    techStack:
      "HTML5 | CSS3 | React Js | Redux | React-Thunk | Styled-Components | Javascript",
    // blog: ""

  },
  {
    id: 5,
    heroImage:
      Avatar,
    title: "WeatherApp",
    desc: "Weather apps are the most popular way to instantly access forecasts, warnings and other useful weather information on our mobile phones.",

    git: "https://github.com/RohitSahuvlog/weatherapps",
    deployed: "https://jolly-rolypoly-0ec0a7.netlify.app/",
    techStack: "HTML5 | CSS3 | Javascript| Fetching Api| React Js   Styled-Components  ",

  },

  {
    id: 6,
    heroImage:
      "https://techweblabs.com/wp-content/uploads/2022/01/Grofers-Review.png",
    title: "Blinkit",
    desc: "Blinkit (formerly Grofers) is an Indian instant delivery service. Customers of the company use a mobile application to order groceries and essentials online.",
    team: "A collaborative project, built in 6 days by a team of 6 members.",
    git: "https://github.com/gauravkrs/blinkit/tree/main",
    deployed: "https://blink-it-by-arshad-gaurav-ayush-rohit-shubham.netlify.app/",
    techStack: "HTML5 | CSS3 | Javascript",
    blog: "https://medium.com/@rg15697/second-construct-week-and-a-new-experience-c71af930eb80",
  },
  {
    id: 7,
    heroImage:
      "https://i0.wp.com/thelowdown.momentum.asia/wp-content/uploads/2021/03/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BD%9C%E5%93%81.jpg?fit=1024%2C512&ssl=1",
    title: "Mytheresa",
    desc: "Mytheresa is a  e-commerce luxury fashion website that deals with all categories of clothing items.",
    team: "This is my indivual project, built in 6 days.",
    git: "https://github.com/RohitSahuvlog/mytheresa",
    deployed: "https://chic-mooncake-91e805.netlify.app",
    techStack: "HTML5 | CSS3 | Javascript",

  },


];

const Projects = () => {
  const [data, setData] = useState(projectData);

  return (
    <ProjectsCon id="projects">
      <p className="subTitle" style={{ color: "#F2AA4CFF" }}>Projects</p>
      <div className="projectCon">
        {data.map((el) => {
          return <Singleproject key={el.id} {...el} />;
        })}
      </div>
    </ProjectsCon>
  );
};

export default Projects;
