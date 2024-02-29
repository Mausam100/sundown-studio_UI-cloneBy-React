import "./home.css";
import video1 from "../assets/main-vedio.mp4";
import icon from "../assets/Favicon.png";
import buttomImg from "../assets/buttom-img.webp";
import image1 from "../assets/hio.webp";
import image2 from "../assets/nywfimg.webp";
import image3 from "../assets/airforece.webp";
import image4 from "../assets/50th.webp";
import image5 from "../assets/playnew.webp";
import image6 from "../assets/soho.jpg";
import image7 from "../assets/soho.webp";
import image8 from "../assets/Project.webp";
import image9 from "../assets/Execution.webp";
import nikeLogo from "../logos/Nikelogo.svg";
import afterpaylogo from "../logos/AfterPaylogo.svg";
import arctexlogo from "../logos/Arcteryxlogo.svg";
import converslogo from "../logos/Converselogo.svg";
import hunterlogo from "../logos/Hunterlogo.svg";
import medialink from "../logos/MediaLinklogo.svg";
import footerimg from "../logos/FooterLogo.svg";

import { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

function Home() {
  const [visible, setVisible] = useState(false);
  const [hiddenDivImage, setHiddenDivImage] = useState(null);
  const [backgroundImg, setBackgroundImg] = useState(image6);
  const [text, setText] = useState("Design");

  const changeBckImg1 = () => {
    setBackgroundImg(image6);
    setText("Design");
  };
  const changeBckImg2 = () => {
    setBackgroundImg(image8);
    setText("Project");
  };
  const changeBckImg3 = () => {
    setBackgroundImg(image9);
    setText("Execution");
  };

  const imgShow1 = () => {
    setVisible(true);
    setHiddenDivImage(image1);
  };
  const imgNotShow1 = () => {
    setVisible(false);
    setHiddenDivImage(null);
  };
  const imgShow2 = () => {
    setVisible(true);
    setHiddenDivImage(image2);
  };
  const imgNotShow2 = () => {
    setVisible(false);
    setHiddenDivImage(null);
  };
  const imgShow3 = () => {
    setVisible(true);
    setHiddenDivImage(image3);
  };
  const imgNotShow3 = () => {
    setVisible(false);
    setHiddenDivImage(null);
  };
  const imgShow4 = () => {
    setVisible(true);
    setHiddenDivImage(image4);
  };
  const imgNotShow4 = () => {
    setVisible(false);
    setHiddenDivImage(null);
  };
  const imgShow5 = () => {
    setVisible(true);
    setHiddenDivImage(image5);
  };
  const imgNotShow5 = () => {
    setVisible(false);
    setHiddenDivImage(null);
  };
  const imgShow6 = () => {
    setVisible(true);
    setHiddenDivImage(image6);
  };
  const imgNotShow6 = () => {
    setVisible(false);
    setHiddenDivImage(null);
  };
  const imgShow7 = () => {
    setVisible(true);
    setHiddenDivImage(image7);
  };
  const imgNotShow7 = () => {
    setVisible(false);
    setHiddenDivImage(null);
  };

  return (
    <>
      <main className="main-section">
        <section className="page1">
          <div className="main">
            <div className="left">
              <h3>
                Sundown is a multi-disciplinary studio focused on creating
                unique, end-to-end experiences and environments.
              </h3>
            </div>
            <div className="right">
              <h1>SPACES THAT INSPIRE</h1>
            </div>
          </div>
          <div className="hero-shape">
            <div className="hero-shape1"></div>
            <div className="hero-shape2"></div>
            <div className="hero-shape3"></div>
          </div>
          <div className="main-vedio">
            <video className="vedio1" autoPlay loop muted>
              <source src={video1} type="video/mp4" />
            </video>
          </div>
        </section>

        <section className="page2">
          <div className="moving-text">
            <div className="con">
              <h1>CONTENT</h1>
              <img src={icon} />
              <h1>ENVIRONMENTS</h1>
              <img src={icon} />
              <h1>EXPERIENCES</h1>
              <img src={icon} />
            </div>
            <div className="con">
              <h1>CONTENT</h1>
              <img src={icon} />
              <h1>ENVIRONMENTS</h1>
              <img src={icon} />
              <h1>EXPERIENCES</h1>
              <img src={icon} />
            </div>
            <div className="con">
              <h1>CONTENT</h1>
              <img src={icon} />
              <h1>ENVIRONMENTS</h1>
              <img src={icon} />
              <h1>EXPERIENCES</h1>
              <img src={icon} />
            </div>
          </div>
          <div className="page2-bottom">
            <div className="buttom-part1">
              <h1>
                We are a group of design-driven, goal-focused creators,
                producers, and designers who believe that the details make all
                the difference.
              </h1>
            </div>
            <div className="buttom-part2">
              <img src={buttomImg} />
              <p>
                We love to create, we love to solve, we love to collaborate, and
                we love to turn amazing ideas into reality. We’re here to
                partner with you through every step of the process and know that
                relationships are the most important things we build.
              </p>
            </div>
          </div>
          <div className="gooey"></div>
        </section>
        <section className="page-3">
          <div className="featured">
            <div className="red-dot"></div>
            <p>FEATURED PROJECTS</p>
          </div>

          <div
            className="elem1"
            onMouseEnter={() => imgShow1(image1)}
            onMouseLeave={imgNotShow1}
          >
            <div className="overlayer1"></div>
            <h1>Makers Studio HOI</h1>
            <div className="miniheding">
              <h4>NIKE</h4>
              <p>Experiential</p>
            </div>
          </div>
          <div
            className="elem2"
            onMouseEnter={() => imgShow2(image2)}
            onMouseLeave={imgNotShow2}
          >
            <div className="overlayer2"></div>
            <h1>NYFW Popup</h1>
            <div className="miniheding">
              <h4>AFTERPAY</h4>
              <p>Experiential</p>
            </div>
          </div>
          <div
            className="elem3"
            onMouseEnter={() => imgShow3(image3)}
            onMouseLeave={imgNotShow3}
          >
            <div className="overlayer3"></div>
            <h1>Air Force 12021</h1>
            <div className="miniheding">
              <h4>NIKE</h4>
              <p>Environment</p>
            </div>
          </div>
          <div
            className="elem4"
            onMouseEnter={() => imgShow4(image4)}
            onMouseLeave={imgNotShow4}
          >
            <div className="overlayer4"></div>
            <h1>50th Anniversary</h1>
            <div className="miniheding">
              <h4>NIKE</h4>
              <p>Environment</p>
            </div>
          </div>
          <div
            className="elem5"
            onMouseEnter={() => imgShow5(image5)}
            onMouseLeave={imgNotShow5}
          >
            <div className="overlayer5"></div>
            <h1>Play New Kidvision</h1>
            <div className="miniheding">
              <h4>NIKE</h4>
              <p>Environment</p>
            </div>
          </div>

          <div
            className="elem6"
            onMouseEnter={() => imgShow6(image6)}
            onMouseLeave={imgNotShow5}
          >
            <div className="overlayer6"></div>
            <h1>SOHO NYC</h1>
            <div className="miniheding">
              <h4>ARC'TREX</h4>
              <p>Environment</p>
            </div>
          </div>
          <div
            className="elem7"
            onMouseEnter={() => imgShow7(image7)}
            onMouseLeave={imgNotShow5}
          >
            <div className="overlayer7"></div>
            <h1>SOHO 2023</h1>
            <div className="miniheding">
              <h4>CONVERSE</h4>
              <p>Environment</p>
            </div>
          </div>

          <div
            className={`fiexd-imgs ${visible ? "hide" : ""}`}
            style={{ backgroundImage: `url(${hiddenDivImage})` }}
          ></div>

          <div className="button">
            <h4>
              <a href="#">All Products →</a>
            </h4>
          </div>
        </section>
        <section className="page4">
          <div className="imgContainer">
            <div className="left">
              <div className="button">
                <button
                  className={text === "Design" ? "active" : ""}
                  onClick={() => changeBckImg1()}
                >
                  Design
                </button>

                <button
                  className={text === "Project" ? "active" : ""}
                  onClick={() => changeBckImg2()}
                >
                  Project
                </button>

                <button
                  className={text === "Execution" ? "active" : ""}
                  onClick={() => changeBckImg3()}
                >
                  Execution
                </button>
              </div>
              <div className="text">
                <div className="1st-test">
                  <p>
                    {text === "Design" &&
                      "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."}
                    {text === "Project" &&
                      "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."}
                    {text === "Execution" &&
                      "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="right"
              style={{ backgroundImage: `url(${backgroundImg})` }}
            ></div>
          </div>
          <div className="swiperCon">
            <div className="work-with">
              <div className="red-dot2"></div>
              <p>WHO WE WORK WITH</p>
            </div>
            <Swiper
              slidesPerView={3}
              spaceBetween={-100}
              centeredSlides={false}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={nikeLogo} alt="" />
                <p>
                  Retained Production support across retail and events in NY,
                  CHI, LA. Creative Design, Design Management,
                  Production/Project Management, and execution of work from
                  concept to installation across the Country.
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <img src={converslogo} alt="" />
                <p>
                  Creative Concepting, Design, Design Management, Project
                  Management, and execution of work from concept to installation
                  across the Country. Cross functional communication and
                  management of third party partners.
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <img src={arctexlogo} alt="" />
                <p>
                  Production and design along with install oversight and
                  execution support for the SoHo store opening on Broadway St,
                  New York. Also working on creative and production work for a
                  new store opening in Glendale, California.
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <img src={hunterlogo} alt="" />
                <p>
                  Design and Production partner for Hunter Holiday 2022 Pop-in
                  at Nordstrom 57th St, New York, including activations in
                  Women’s, Men’s and Kid’s zones. Thirty-five (35) additional
                  smaller take-downs in Nordstrom stores across the US. Concept
                  design for Holiday boot customization events in stores across
                  winter 2022
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <img src={medialink} alt="" />
                <p>
                  Creative, Design, and Production Partner for 2023 CES. Scope
                  Included creation of Branding Identity, Assets, and Digital
                  Content, Design, Production design, Production oversight and
                  Installation of client activations for IBM, Delta, Instacart,
                  and more.
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <img src={afterpaylogo} alt="" />
                <p>
                  Creative, Design, and Production Partner for 2022 NY Fashion
                  Week Pop-Up space. In Partnership with B-Reel scope including
                  creation of Final Design, Design Assets, 3D Renders,
                  Production design, Production/Partner oversight and creation
                  of a two (2) story pop-up for Afterpay’s clients such as
                  Crocs, JD Sports, Container Store, & Revolve.
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </main>
      <div className="transparent"></div>
      <footer>
      <div className="footer-effect">
          
          <div className="sape1"></div>
          <div className="sape2"></div>
          <div className="sape3"></div>
          <div className="sape4"></div>
          

        </div>
        <div className="top">
          <div className="menu">
            <a href="#"> Work</a>
            <a href="#"> Studio</a>
            <a href="#"> Contact</a>
          </div>
          <div className="inbox">
            <p>
              Get industry insights and creative inspiration straight to your
              inbox.
            </p>
            <input type="email" placeholder="Email address" />
            <button>→</button>
          </div>
        </div>
        <img src={footerimg} alt="" />
        <div className="botom">
          <p>Copyright © Sundown Studio</p>
          <p>Brooklyn, NY</p>
          <a href="#">Instagram</a>
          <a href="#">Linkedin</a>
        </div>
        
      </footer>
    </>
  );
}

export default Home;
