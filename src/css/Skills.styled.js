import styled from "styled-components";

export const SkillsDiv = styled.div`
  height: auto;
  width: 100%;
  background-color: #0d1117;
  /* columns: #ffffff; */

  .title {
    padding-top: 15px;
    color: #ffffff;
    font-size: 35px;
    font-weight: 500;
    border-bottom: 3px solid #F2AA4CFF;
    text-align:center;
    width:110px;
    margin:auto;
  }

  .mainContainer {
    width: 80%;
    /* border: 1px solid white; */
    margin: auto;
    .container {
      width: 100%;

      padding: 30px;
      /* border: 1px solid white; */
      height: 100%;
      margin: auto;
      display: flex;

      .FrontEnd {
        /* border: 1px solid white; */
        width: 50%;
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 20px;
        box-sizing: border-box;
        flex-direction: column;

        .frontEndSKills {
          color: #ffffff;
          width: 100%;
          display: flex;
          justify-content: center;

          .skillsList {
            list-style: none;
            width: 350px;
            padding: 20px;
            gap: 30px;
            display: flex;
            align-items: center;
            flex-direction: column;

            li {
              display: flex;
              justify-content: left;
              /* border: 1px solid black; */
              width: 100%;

              height: 50px;
              align-items: center;
              font-size: 20px;
              gap: 15px;
              background-color: #0284c7;
              box-sizing: border-box;
              padding-left: 20px;
              border-radius: 7px;
              span {
                width: 50px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 35px;
              }
            }
          }
        }
      }
    }

    .tools {
      /* border: 1px solid white; */
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .toolsInSkills {
        /* background-color: red; */
        height: 100%;
        margin: auto;

        padding: 30px;
        ul {
          margin: auto;
          /* border: 1px solid white; */

          list-style: none;
          display: grid;
          grid-template-columns: repeat(4, 120px);
          justify-content: center;
          column-gap: 45%;
          row-gap: 35px;
          padding: 20px 0;
          li {
            height: 120px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            /* border: 1px solid #ffffff; */
            background-color: #0284c7;
            padding: 5px;
            border-radius: 5px;
            span {
              /* background-color: black; */
              font-size: 45px;
              padding: 5px;
            }
            p {
              font-weight: 500;
            }
          }
        }
      }
    }
  }
  .subTitle {
    /* border: 1px solid white; */
    padding: 4px 15px;
    border-bottom: 3px solid #F2AA4CFF;
    color: #ffffff;
    font-size: 25px;
    width: auto;
    font-weight: 500;
  }

  @media (max-width: 1450px) {
    .mainContainer {
      width: 100%;

      .container {
        padding: 0;
      }
    }
  }

  @media (max-width: 1200px) {
    .mainContainer {
      width: 100%;

      .container {
        padding: 0;

        .FrontEnd {
          .frontEndSKills {
            .skillsList {
              /* width: 60%; */
            }
          }
        }
      }

      .tools {
        .toolsInSkills {
          /* background-color: red; */

          padding: 30px;
          ul {
            grid-template-columns: repeat(3, 120px);
            column-gap: 250px;
          }
        }
      }
    }
  }

  @media (max-width: 1040px) {
    .mainContainer {
      width: 100%;

      .tools {
        .toolsInSkills {
          /* background-color: red; */

          padding: 30px;
          ul {
            grid-template-columns: repeat(3, 120px);
            column-gap: 200px;
          }
        }
      }
    }
  }

  @media (max-width: 840px) {
    .mainContainer {
      width: 100%;

      .container {
        flex-direction: column;

        .FrontEnd {
          /* border: 1px solid white; */
          width: 100%;
          .frontEndSKills {
            /* .skillsList {
              width: 300px;
            } */
          }
        }
      }

      .tools {
        .toolsInSkills {
          /* background-color: red; */

          padding: 30px;
          ul {
            grid-template-columns: repeat(3, 120px);
            column-gap: 150px;
          }
        }
      }
    }
  }

  @media (max-width: 740px) {
    .mainContainer {
      .container {
        flex-direction: column;

        .FrontEnd {
          /* border: 1px solid white; */
          width: 100%;
          .frontEndSKills {
          }
        }
      }

      .tools {
        .toolsInSkills {
          /* background-color: red; */

          padding: 30px;
          ul {
            grid-template-columns: repeat(2, 120px);
            column-gap: 200px;
          }
        }
      }
    }
  }

  @media (max-width: 640px) {
    .mainContainer {
      width: 100%;

      .container {
        flex-direction: column;

        .FrontEnd {
          /* border: 1px solid white; */
          width: 100%;
          .frontEndSKills {
            .skillsList {
              width: 300px;

              li {
                font-size: 18px;
              }
            }
          }
        }
      }

      .tools {
        .toolsInSkills {
          /* background-color: red; */

          padding: 30px;
          ul {
            grid-template-columns: repeat(2, 120px);
            column-gap: 100px;
          }
        }
      }
    }
  }

  @media (max-width: 410px) {
    .mainContainer {
      width: 100%;

      .container {
        flex-direction: column;

        .FrontEnd {
          /* border: 1px solid white; */
          width: 100%;
          .frontEndSKills {
            .skillsList {
              width: 300px;

              li {
                font-size: 18px;
              }
            }
          }
        }
      }

      .tools {
        .toolsInSkills {
          /* background-color: red; */

          padding: 30px;
          ul {
            grid-template-columns: repeat(2, 105px);
            column-gap: 50px;

            li {
              height: 105px;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
`;
