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
                  <a data-nav-section="services">Experience</a>
                </li>
                <li>
                  <a data-nav-section="experience">Career</a>
                </li>
                <li>
                  <a data-nav-section="education">Education</a>
                </li>
                <li>
                  <a data-nav-section="blog">Blog</a>
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
                        <h3>Express</h3>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div
                      class="col-md-12 animate-box fadeInLeft animated"
                      data-animate-effect="fadeInLeft"
                    >
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
        </div>
      </div>
    </div>
  );
}

export default App;
