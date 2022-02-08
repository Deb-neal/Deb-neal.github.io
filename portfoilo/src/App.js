import "./App.css";
import picture1 from "./images/my.jpeg";
import picture2 from "./images/dev.png";

function App() {
  return (
    <div id="page">
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
                        <h3>늦은 만큼 더 열심히 하고 있습니다.</h3>
                        <a class="btn-hire">
                          앞으로 뛰어난 서버 개발자가 되고 싶습니다!
                        </a>
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
                    개발의 처음 시작은 javascript로 시작하였습니다. 비전공자
                    출신으로서 그 어떠한 지식도 없는, 말 그대로 백지인 상태로
                    발을 딛게 되었습니다. 그렇기에 부트캠프을 신청하게 되었고 이
                    캠프를 통해
                    <strong> React, Node.js, AWS, Docker </strong>를 공부하고
                    현재는 이 캠프에서 배운 교육을 통해 서버 개발자로
                    취업준비중입니다. 배움을 보다 완벽하게 익히고자 html와 css,
                    javascript 역시 공부하고 있습니다.
                  </p>
                  <p>
                    {" "}
                    부트캠프을 통해 두번의 프로젝트를 진행했으며{" "}
                    <strong>아마존 AWS</strong>를 통해 배포하였고, 사용자 증가를
                    대비하여 로드밸런서를 활용하여 EC2 서버를 확장하고, S3와
                    RDS를 늘려 DB를 확장시키는 것을 경험하였습니다.{" "}
                    <strong>ec2를 활용한 직접 배포</strong>에 대해서도
                    학습하였습니다. 또한 GitHub을 통해 소스 코드 및 프로젝트를
                    관리하고 협업하고 있습니다.
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
                    javascript의 기본 문법을 익히고 ajax를 통해 서버와 통신하며
                    댓글 기능 등을 직접 구현하였습니다.
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
                    AWS를 서버로 활용하며, EC2를 확장하고 로드밸런서를
                    연결해주었습니다. 또한 도메인을 구입하여 HTTPS를 배포하였고
                    RDS를 통해 데이터베이스를 구축하였습니다.
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
                    활용하여 블로그 및 포트폴리오 사이트를 관리합니다.
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
