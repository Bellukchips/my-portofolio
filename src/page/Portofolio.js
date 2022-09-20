import React from "react";
import "../css/Portofolio.css";
import flutix from "../img/flutix.jpeg";
import signature from "../img/signature.jpeg";
import mvoie_app from "../img/movie_app.jpeg";
import penjurian from "../img/penjurian.jpeg";
import umkm from "../img/umkm.jpeg";
import mojadipro from "../img/mojadipro.jpeg";
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
                  <img className="project__img" src={flutix} />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Flutix (Framework Flutter)</h5>
                <h4 className="project__text">
                  Demo application for cinema ticketing
                </h4>
                <a
                  href="https://play.google.com/store/apps/details?id=com.bellukstudio.flutix"
                  target={"_blank"}
                  className="project__btn"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img className="project__img" src={signature} />
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
                <a
                  href="https://play.google.com/store/apps/details?id=com.bellukstudio.create_signature"
                  target={"_blank"}
                  className="project__btn"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img className="project__img" src={mvoie_app} />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">
                  Movie Apps - Tiket Bioskop (Kotlin)
                </h5>
                <h4 className="project__text">Application cinema ticketing</h4>
                <a
                  href="https://play.google.com/store/apps/details?id=com.belluk.movapps"
                  target={"_blank"}
                  className="project__btn"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img className="project__img" src={penjurian} />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">
                  Penjurian Application (Framework Laravel) (Freelance Project)
                </h5>
                <h4 className="project__text">
                  Penjurian application for contest
                </h4>
                <a
                  href="https://github.com/Bellukchips/penjurian"
                  target={"_blank"}
                  className="project__btn"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img className="project__img" src={umkm} />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">
                  UMKM Application (Java) (Freelance Project)
                </h5>
                <h4 className="project__text">
                  Application for sell product from UMKM
                </h4>
                <a
                  href="https://github.com/Bellukchips/freelance_project"
                  target={"_blank"}
                  className="project__btn"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img className="project__img" src={mojadipro} />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">
                  MojadiPro Course
                </h5>
                <h4 className="project__text">
                  Course Application in MojadiApp Company
                </h4>
                <a
                  href="https://github.com/Bellukchips/freelance_project"
                  target={"_blank"}
                  className="project__btn"
                >
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
