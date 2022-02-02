import React from "react";
import "../css/Portofolio.css";
import Project1 from "../img/portfolio-1.jpg";
function Portofolio() {
  return (
    <div className="project component__space" id="Portofolio">
      <div className="heading">
        <h1 className="heading">My Project</h1>
        <p className="heading p__color">
          This is list my project & freelance project
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img className="project__img" src={Project1} />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Flutix (Framework Flutter)</h5>
                <h4 className="project__text">
                  Demo application for cinema ticketing{" "}
                </h4>
                <a href="#" className="project__btn">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img className="project__img" src={Project1} />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">
                  Draw Signature (Framework Flutter)
                </h5>
                <h4 className="project__text">  
                  Application for create digital signature
                </h4>
                <a href="#" className="project__btn">
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img className="project__img" src={Project1} />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">
                  Movie Apps - Tiket Bioskop (Kotlin)
                </h5>
                <h4 className="project__text">
                  Application for create digital signature
                </h4>
                <a href="#" className="project__btn">
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img className="project__img" src={Project1} />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">
                  Penjurian Application (Framework Laravel)
                </h5>
                <h4 className="project__text">
                  Application for create digital signature
                </h4>
                <a href="#" className="project__btn">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portofolio;
