import "./App.css";
import Eduction from "./education";
import picture1 from "./images/my.jpeg";
import picture2 from "./images/dev.png";
import blog from "./images/b-log.png";
import studeaming from "./images/studeaming.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiFillGithub, AiOutlineMail, AiFillPhone } from "react-icons/ai";

function App() {
  return (
    <div id="page">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div class="container-wrap">
        <aside id="colorlib-aside">
          <div class="text center">
            <img src={picture1} class="author-img"></img>
            <h1 id="colorlib-logo">Min su Ann</h1>
            <span class="position">Server development</span>
          </div>
          <nav id="colorlib-main-menu" role="navigation" class="navbar">
            <div id="navbar" class="collapse">
              <ul>
                <li class="active">
                  <a data-nav-section="home">Home</a>
                </li>
                <li>
                  <a data-nav-section="about">About</a>
                </li>
                <li>
                  <a data-nav-section="skills">Teck Skills</a>
                </li>
                <li>
                  <a data-nav-section="work">Project</a>
                </li>
                <li>
                  <a data-nav-section="education">Education</a>
                </li>
                <li>
                  <a data-nav-section="contact">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
        <div id="colorlib-main">
          <section id="colorlib-hero"></section>
          <section class="colorlib-about" data-section="about">
            <div class="colorlib-narrow-content">
              <div class="row">
                <div class="col-md-12">
                  <div
                    class="row row-bottom-padded-sm animate-box fadeInLeft animated"
                    data-animate-effect="fadeInLeft"
                  >
                    <div class="col-md-12">
                      <div class="about-desc">
                        <span class="heading-meta">About Me</span>
                        <h2 class="colorlib-heading">
                          "30살 늦은 신입 서버 개발자"
                        </h2>
                        <p>
                          <strong>
                            "안녕하세요. 이제 막 개발분야에 첫 발을 내딛은 신입
                            백엔드 개발자 안민수입니다."
                          </strong>
                        </p>{" "}
                        <p>
                          Node.js와 ORM중 Sequelize로 데이터베이스를 다루는
                          백엔드개발자 안민수입니다. 웹 페이지 개발중 express와
                          Mysql, JWT를 통해 데이터베이스를 구축해본 경험과,
                          Socket.io를 이용한 라이브 스트리밍 사이트를 구현해본
                          경험이 있습니다.
                          <br />
                          <br />
                          빠르게 변하는 시대, 각광받고있는 새로운 기술들, 바뀌는
                          시대에 따라가기보다 그 시대를 제 손으로 만들어보고
                          싶다는 생각이 들었고 미련없이 하던일을 그만두고
                          IT업계에 발을 들이게 되었습니다. 처음 발을 내딛고 든
                          생각은 이전에 하던 일인 요리와 비슷하다고
                          생각했습니다.
                          <br />
                          <br />
                          요리에는 전체적인 흐름과 그 안에 세부적인 작업순서,
                          그리고 커뮤니케이션이 존재합니다.{" "}
                          <strong>
                            "타 직군과 다르게 불을쓰고, 칼을쓰는 그런 위험에
                            직접적으로 마주하고, 코스 하나를 위해 각자 분담하고
                            있는 요리 진행상황을 보고하는 그런 커뮤니케이션,
                            그리고 모든 일과가 종료된 후 본인만의 독창적인
                            요리를 만들기 위해 노력했던 시간들"
                          </strong>{" "}
                          이런 시간들을 뒤로하고 부트캠프 코드스테이츠라는 곳에
                          지원하게되었습니다. 처음 마주하는 검은 화면과,
                          윈도우가 아닌 새로운 운영체체 Ubuntu, 그리고 수많은
                          영어들 익숙하지 않았기에 당황도 했고 적응하는데 시간도
                          많이 걸렸습니다. 남들보다 시작점이 달랐기에 그만큼 더
                          노력이 필요하다고 생각되었고, 끊임없이 노력했습니다.
                          <br />
                          <br />그 노력을 통해 깨달은것은 마치 이 과정이 하나의
                          코스를 만드는 과정과 비슷하다는 사실이였습니다. 여러
                          사람이 모여 하나의 프로젝트를 위해 파트를 나눠가지며,
                          끊임없이 소통하고, 진행상황을 보고하며 완성품을 위해
                          달려가는 이 과정이 매우 흡사했습니다. 그러다보니 이
                          분야에 대해 매우 만족하며, 잘 맞다는 생각을
                          하게되었습니다.
                          <br />
                          <br />
                          <strong>
                            또한 코더가 아닌 개발자라는 말을 당당하게
                            말할수있을정로도 노력하고 발전하려고 합니다.
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div
                      class="col-md-3 animate-box fadeInLeft animated"
                      data-animate-effect="fadeInLeft"
                    >
                      <div class="services color-1">
                        <span class="icon2">
                          <i class="icon-data"></i>
                        </span>
                        <h3>JavaScript</h3>
                      </div>
                    </div>
                    <div
                      class="col-md-3 animate-box fadeInRight animated"
                      data-animate-effect="fadeInRight"
                    >
                      <div class="services color-2">
                        <span class="icon2">
                          <i class="icon-globe-outline"></i>
                        </span>
                        <h3>Node.js</h3>
                      </div>
                    </div>
                    <div
                      class="col-md-3 animate-box fadeInUp animated"
                      data-animate-effect="fadeInTop"
                    >
                      <div class="services color-3">
                        <span class="icon2">
                          <i class="icon-bulb"></i>
                        </span>
                        <h3>React</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="colorlib-skills" data-section="skills">
            <div class="colorlib-narrow-content">
              <div class="row">
                <div
                  class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated"
                  data-animate-effect="fadeInLeft"
                >
                  <span class="heading-meta">TECH SKILLS</span>
                  <h2 class="colorlib-heading animate-box fadeInUp animated">
                    저는 지금 이것을 할 수 있습니다.
                  </h2>
                </div>
              </div>
              <div class="row">
                <div
                  class="col-md-12 animate-box fadeInLeft animated"
                  data-animate-effect="fadeInLeft"
                >
                  <p>
                    비전공자 출신으로서 그 어떠한 지식도 없는, 말 그대로 백지인
                    상태로 발을 딛게 되었습니다. <br />
                    그렇기에 부트캠프을 신청하게 되었고 이 캠프를 통해
                    <strong>
                      {" "}
                      <br /> - JavaScript 기반으로 풀 스택 과정 교육
                      <br /> - 프론트엔드 React를 바탕으로 전반적인 교육 (
                      Redux, Styled commponet. etc)
                      <br /> - 백엔드 Node.js를 바턍으로 전반적인 교육 (Express,
                      Mysql, mongoose, etc)
                    </strong>
                    <br />을 공부하고 현재는 이 캠프에서 배운 교육을 통해 서버
                    개발자로 취업준비중입니다. <br />
                    배움을 보다 완벽하게 익히고자 html와 css, javascript을 더
                    깊게 공부하고 있습니다.
                  </p>
                  <p>
                    {" "}
                    부트캠프을 통해 두번의 프로젝트를 진행했으며{" "}
                    <strong>아마존 AWS, 구매한 도메인</strong>를 통해
                    배포하였고, AWS에서 제공하는 RDS를 이용하여 데이터베이스를
                    구현했으며, EC2, ACM을 통한 인증서를 통해 서버를 HTTPS로
                    배포하였습니다. 또한 사용자 증가를 감안하며 로드밸런서로
                    EC2서버를 확장하였습니다. GitHub을 통해 소스 코드 및
                    프로젝트를 관리하고 협업하고 있습니다.
                  </p>
                </div>
                <div
                  class="col-md-6 animate-box fadeInLeft animated"
                  data-animate-effect="fadeInLeft"
                >
                  <div class="progress-wrap">
                    <h3>
                      <strong>Javascript</strong>
                    </h3>
                    <div class="progress">
                      <div
                        class="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span>60%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-6 animate-box fadeInRight animated"
                  data-animate-effect="fadeInRight"
                >
                  <div class="progress-wrap">
                    <h3>
                      <strong>Node.js</strong>
                    </h3>
                    <div class="progress">
                      <div
                        class="progress-bar color-2"
                        role="progressbar"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span>60%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-6 animate-box fadeInLeft animated"
                  data-animate-effect="fadeInLeft"
                >
                  <div class="progress-wrap">
                    <h3>
                      <strong>React</strong>
                    </h3>
                    <div class="progress">
                      <div
                        class="progress-bar color-3"
                        role="progressbar"
                        aria-valuenow="40"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span>40%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-6 animate-box fadeInLeft animated"
                  data-animate-effect="fadeInLeft"
                >
                  <div class="progress-wrap">
                    <h3>
                      <strong>AWS</strong>
                    </h3>
                    <div class="progress">
                      <div
                        class="progress-bar color-6"
                        role="progressbar"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span>60%</span>
                      </div>
                    </div>
                    EC2,ACM에서 발급받은 인증서를 통해 서버를 HTTPS로
                    배포했으며, 사용자증가를 감안하여 로드밸런서로 EC2를
                    확장시켰습니다. 더불어 S3을 통해 프론트엔드 배포 역시
                    진행했습니다.
                  </div>
                </div>
                <div
                  class="col-md-6 animate-box fadeInRight animated"
                  data-animate-effect="fadeInRight"
                >
                  <div class="progress-wrap">
                    <h3>
                      <strong>Github</strong>
                    </h3>
                    <div class="progress">
                      <div
                        class="progress-bar color-7"
                        role="progressbar"
                        aria-valuenow="40"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span>60%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="colorlib-education" data-section="education">
            <div class="colorlib-narrow-content">
              <div class="row">
                <div
                  class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated"
                  data-animate-effect="fadeInLeft"
                >
                  <span class="heading-meta">Education</span>
                  <h2 class="colorlib-heading animate-box fadeInUp animated">
                    Education
                  </h2>
                </div>
              </div>
              <div class="row">
                <div
                  class="col-md-12 animate-box fadeInLeft animated"
                  data-animate-effect="fadeInLeft"
                >
                  <div class="fancy-collapse-panel">
                    <div
                      class="panel-group"
                      id="accordion"
                      role="tablist"
                      aria-multiselectable="true"
                    >
                      <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingOne">
                          <h4 class="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              aria-expanded="false"
                              aria-controls="collapseOne"
                              class="collapsed"
                            >
                              High School
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseOne"
                          class="panel-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="headingOne"
                          aria-expanded="false"
                        >
                          <div class="panel-body">
                            <div class="row">
                              <div class="col-md-4">
                                <strong>창동고등학교</strong>
                              </div>
                              <div class="col-md-8">
                                <p>2009.02 - 2012.03</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingTwo">
                          <h4 class="panel-title">
                            <a
                              class="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              CODESTATES SEB 33th
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseTwo"
                          class="panel-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="headingTwo"
                          aria-expanded="false"
                        >
                          <div class="panel-body">
                            <div class="row">
                              <div class="col-md-4">
                                <p>
                                  <strong>
                                    코드스테이츠(Code States) Advanced Software
                                    engineering, immersive program(소프트
                                    엔지니어 풀스택 커리큘럼 / 33기)
                                  </strong>
                                </p>
                              </div>
                              <div class="col-md-8">
                                <p>
                                  코드스테이츠 소프트웨어 엔지니어 풀스택
                                  커리큘럼을 수료하였습니다.
                                  <br /> 전반적인 JavaScript 기반으로 한 풀스택
                                  과정이며,
                                  <br /> 프론트을 위한 REact, 백엔드를 위한
                                  Node.js을 학습하고
                                  <br /> 그외 AWS, Docker, Git등 개발에 필요한
                                  부분을 학습하였습니다.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="colorlib-work" data-section="work">
            <div class="colorlib-narrow-content">
              <div class="row">
                <div
                  class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated"
                  data-animate-effect="fadeInLeft"
                >
                  <span class="heading-meta">My Work</span>
                  <h2 class="colorlib-heading animate-box fadeInUp animated">
                    Project
                  </h2>
                </div>
              </div>
              <div
                class="row row-bottom-padded-sm animate-box fadeInLeft animated"
                data-animate-effect="fadeInLeft"
              ></div>

              <div
                class="animate-box fadeInUp animated"
                data-animate-effect="fadeInTop"
              >
                <strong>팀 프로젝트</strong>
              </div>
              <div class="row">
                <div
                  class="col-md-6 animate-box fadeInLeft animated"
                  data-animate-effect="fadeInLeft"
                >
                  <div class="project">
                    <img src={blog} />
                    <div class="desc">
                      <div class="con">
                        <h3>
                          <a href="http://b-log.ml" target="_blank">
                            프로젝트: 디지털과 아날로그 감성을 잇는 독서
                            기록서비스 (B-log) (2021.11.04 - 2021.11.18)
                          </a>
                        </h3>
                        <span>
                          독서 기록 서비스. 어릴적 책을 읽던 시절이 지금에는
                          E-BOOK 형태로 변하게 되었습니다. 책장에 꽂힌 책들을
                          보며 무슨 책을 읽었는지 확인하던 그때의 감성을
                          E-BOOK은 느끼지 못합니다. 그렇기 때문에 이 웹페이지는
                          그런 감상을 느낄수있도록 E-BOOK 독서 기록 서비스를
                          제공합니다.
                        </span>
                        <p class="icon">
                          <span>
                            <a
                              href="https://github.com/codestates/B-log"
                              target="_blank"
                            >
                              <i class="icon-eye"></i>{" "}
                              <strong>Project Github</strong>
                            </a>
                          </span>
                          <span>
                            <a
                              href="https://youtu.be/1y59VDkCj08"
                              target="_blank"
                            >
                              <i class="icon-data"></i>{" "}
                              <strong>구현 기능 상세보기</strong>
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="col-md-6 animate-box fadeInRight animated"
                  data-animate-effect="fadeInRight"
                >
                  <div class="project">
                    <img src={studeaming} />
                    <div class="desc">
                      <div class="con">
                        <h3>
                          <a href="http://studeaming.com/" target="_blank">
                            프로젝트명: 누구나 쉽게 Study with me, 공부 스트리밍
                            플랫폼 Studeaming (2021.11.20 - 2021.12.21)
                          </a>
                        </h3>
                        <span>
                          코로나 시국에 접어들게 되면서 다같이 모여 공부를
                          하거나, 스터디를 할수없는 시대가 되었습니다.
                          그러다보니 Study with me라는 트렌트가 유투브에서
                          유행을 하게되었고, 그런 트렌드에 맞춰
                          기획하게되었습니다. 유투브의 단점을 보완하고자 해당
                          기능인 스트리밍, 공부에만 충실할수있도록 만든
                          서비스입니다.
                        </span>
                        <p class="icon">
                          <span>
                            <a
                              href="http://www.personalconnect.co.kr"
                              target="_blank"
                            >
                              <i class="icon-eye"></i>{" "}
                              <strong>Project Github</strong>
                            </a>
                          </span>
                          <span>
                            <a
                              href="https://deaguowl.github.io/pdf/connect.pdf"
                              target="_blank"
                            >
                              <i class="icon-data"></i>{" "}
                              <strong>구현 기능 상세보기</strong>
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 animate-box fadeInUp animated">
                  <p>
                    <a class="btn btn-primary btn-lg btn-load-more">
                      {" "}
                      앞으로 더 많은 프로젝트가 추가될 예정입니다:)
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section class="colorlib-contact" data-section="contact">
            <div class="colorlib-narrow-content">
              <div class="row">
                <div
                  class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated"
                  data-animate-effect="fadeInLeft"
                >
                  <span class="heading-meta">Get in Touch</span>
                  <h2 class="colorlib-heading">Contact</h2>
                </div>
              </div>
              <div class="row">
                <div class="col-md-5">
                  <div
                    class="colorlib-feature colorlib-feature-sm animate-box fadeInLeft animated"
                    data-animate-effect="fadeInLeft"
                  >
                    <div class="colorlib-icon">
                      <i>
                        <AiOutlineMail />
                      </i>
                    </div>
                    <div class="colorlib-text">
                      <p>dksaksen7@gmail.com</p>
                    </div>
                  </div>

                  <div
                    class="colorlib-feature colorlib-feature-sm animate-box fadeInLeft animated"
                    data-animate-effect="fadeInLeft"
                  >
                    <div class="colorlib-icon">
                      <i>
                        <AiFillPhone />
                      </i>
                    </div>
                    <div class="colorlib-text">
                      <p>+82 10 7415 5152</p>
                    </div>
                  </div>

                  <div
                    class="colorlib-feature colorlib-feature-sm animate-box fadeInLeft animated"
                    data-animate-effect="fadeInLeft"
                  >
                    <div class="colorlib-icon">
                      <i>
                        <AiFillGithub />
                      </i>
                    </div>
                    <div class="colorlib-text">
                      <p>
                        <a href="https://github.com/Deb-neal" target="_blank">
                          https://github.com/Deb-neal
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-7 col-md-push-1">
                  <div class="row">
                    <div
                      class="col-md-10 col-md-offset-1 col-md-pull-1 animate-box fadeInRight animated"
                      data-animate-effect="fadeInRight"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
