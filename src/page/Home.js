import React, { useState } from "react";
import "../css/Home.css";
import logo from "../img/icon.png";
import myPhoto from "../img/me.png";
function Home() {
  // fixed header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 0);
  });

  // toggle menu
  const [show, setShow] = useState(true);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Portofolio">
                <li className="nav__items mx__15">Portofolio</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>

          {/** toggle menu */}
          <div className="toggle__menu">
            <svg
              onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-list white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
            {show ? (
              <div className="sidebar">
                <ul className="sidebar d__flex">
                  <li className="sideNavbar">
                    <a href="#Home">Home</a>
                  </li>
                  <li className="sideNavbar">
                    <a href="#About">About</a>
                  </li>
                  <li className="sideNavbar">
                    <a href="#Portofolio">Portofolio</a>
                  </li>
                  <li className="sideNavbar">
                    <a href="#Contact">Contact</a>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
        {/**Home content */}
        <div className="container">
          <div className="home__content">
            <div className="row">
              <div className="col__2">
                <h2 className="home__text pz_10">HI, I'm Lukman</h2>
                <h3 className="home__text sweet">Mobile App Developer</h3>
                {/* <h4 className="home__text ">from Indonesian</h4> */}
              </div>
              <div className="col__2">
                <img className="photo__me" src={myPhoto} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
