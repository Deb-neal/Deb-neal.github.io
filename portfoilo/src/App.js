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
                  <a href="#" data-nav-section="home">
                    Home
                  </a>
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
                          나이가 있는 만큼 그동안 여러 가지 일들을 했었습니다.
                          그러다 문득 세상이 너무 빠르게 변화하고 있다는 생각을
                          하게 되었습니다. 그래서 변화하는 세상을 따라가기보다는
                          그런 세상을 손으로 직접 바꿔보고 싶다는 생각을 하게
                          되었고{" "}
                          <strong>
                            미련없이 하던 일을 그만두고 개발이라는 IT분야에
                            뛰어들게되었습니다.
                          </strong>{" "}
                          남들보다 늦은 나이에 시작한만큼, 남들보다 더 열심히
                          개발을 배워가고 있습니다.
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
                  <div class="row">
                    <div class="col-md-12 animate-box fadeInLeft animated">
                      <div class="hire">
                        <h3>
                          <strong>늦은 만큼 더 열심히 하고 있습니다!</strong>
                        </h3>
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
                    배움을 보다 완벽하게 익히고자 html와 css, javascript 역시
                    공부하고 있습니다.
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
                    부트캠프에서 JavaScript 기반으로 풀 스택 과정 교육을
                    소화했으며 이를 통해 javascript의 기본 문법을 익히고 ajax를
                    통해 서버와 통신하며 댓글 기능 등을 직접 구현하였습니다.
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
                    Javascript를 사용하여 웹 페이지만 다룰수있는 한계점을 벗어나
                    서버를 다룰수있는 프레임워크인 Node.js를 다룹니다. 이를통해
                    서버를 구축하고 클라이언트와 통신하며 연결을 하였습니다.
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
                    HTML, CSS, JS을 통해 웹페이지를 구축할수도있지만 React를
                    통해 보다 손쉽게 페이지를 구성하고 CSS를 구현할수있습니다.
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
                    대부분의 프로젝트를 github를 통해 소스 코드를 관리하였으며,
                    협업 역시 github을 통해 진행하였습니다. 또한 github서버를
                    활용하여 포트폴리오 사이트를 관리합니다.
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
                              href="#collapseOne"
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
                              href="#collapseTwo"
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
              >
                <div class="col-md-12">
                  <section>
                    <p class="work-menu">
                      <span>
                        <strong>개인 프로젝트</strong>
                      </span>
                      <span>
                        <strong>팀 프로젝트</strong>
                      </span>
                      <span>
                        <strong>기능 학습</strong>
                      </span>
                      <span>
                        <strong>Business</strong>
                      </span>
                    </p>
                  </section>
                  <p class="work-menu">
                    <span>
                      <strong>
                        <a
                          href="http://www.jangcar.co.kr"
                          target="_blank"
                          class="active"
                        >
                          개인 프로젝트
                        </a>
                      </strong>
                    </span>{" "}
                    <span>
                      <strong>
                        <a
                          href="https://www.personalconnect.co.kr"
                          target="_blank"
                          class="active"
                        >
                          팀 프로젝트
                        </a>
                      </strong>
                    </span>
                    <span>
                      <strong>
                        <a
                          href="http://www.riceplanner.com"
                          target="_blank"
                          class="active"
                        >
                          청춘정미소
                        </a>
                      </strong>
                    </span>{" "}
                    <span>
                      <strong>Web Project</strong>
                    </span>{" "}
                    <span>
                      {" "}
                      <a href="#">Software</a>
                    </span>{" "}
                    <span>
                      <a href="#">Apps</a>
                    </span>
                  </p>
                </div>
              </div>

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
                          <a href="http://www.jangcar.co.kr" target="_blank">
                            장거리카풀은 장카!(2019.06~)
                          </a>
                        </h3>
                        <span>
                          장거리 카풀 서비스. 현재 단거리 카풀의 경우 굉장히
                          활성화되고 있습니다. 하지만 장거리 카풀의 경우 가장
                          활발하게 이루어지고 있는 것이 밴드입니다. 밴드에서
                          이루어지다 보니 실제로 사람들이 확인하고 이용하는 데
                          굉장히 큰 불편을 겪고 있습니다. 따라서 사람들이 코레일
                          앱 혹은 버스 앱처럼 쉽게 본인의 출발지와 목적지, 날짜
                          등을 필터리해서 운전자와 연결해주는 서비스입니다.
                        </span>
                        <p class="icon">
                          <span>
                            <a href="#">
                              <i class="icon-share3"></i>
                            </a>
                          </span>
                          <span>
                            <a href="http://www.jangcar.co.kr" target="_blank">
                              <i class="icon-eye"></i> detail
                            </a>
                          </span>
                          <span>
                            <a
                              href="https://deaguowl.github.io/pdf/jangcar.pdf"
                              target="_blank"
                            >
                              <i class="icon-data"></i> 구현 기능 상세보기
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
                            Connect(2019.05~)
                          </a>
                        </h3>
                        <span>
                          개인 인맥 관리플랫폼. 살아가면서 굉장히 많은 사람들을
                          만나고, 그리고 그 시기마다 정말 소중한 사람들이
                          있습니다. 하지만 바쁜 생활 속에서 한 해, 두 해
                          연락하지 않게 되면 그 소중한 인연의 끈이 없어지게
                          되어버립니다. 우리는 매일 스마트폰을 보지만 정작
                          소중한 사람들에게 연락은 하지 않습니다. 인맥 관리의
                          가장 기본은 바로 "정기적인 연락"입니다. Connect를 통해
                          매일 연락해야 할 인맥들을 확인하고, 커멘트를
                          남겨놓으면 또 일정 기간 이후 연락해야 될 때에
                          알려줍니다.{" "}
                        </span>
                        <p class="icon">
                          <span>
                            <a href="#">
                              <i class="icon-share3"></i>
                            </a>
                          </span>
                          <span>
                            <a
                              href="http://www.personalconnect.co.kr"
                              target="_blank"
                            >
                              <i class="icon-eye"></i> detail
                            </a>
                          </span>
                          <span>
                            <a
                              href="https://deaguowl.github.io/pdf/connect.pdf"
                              target="_blank"
                            >
                              <i class="icon-data"></i> 구현 기능 상세보기
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
                    <a
                      href="#"
                      onclick="return false;"
                      class="btn btn-primary btn-lg btn-load-more"
                    >
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
