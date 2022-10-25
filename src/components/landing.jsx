import React from "react";
import logo from "../assets/LOGO-AMWHITE.png";
import Modal from "./Modal";
import Resume from "../assets/Abdullah Mohamud RESUME.pdf";

export default function Landing() {
  let contrastToggle = false;

  function toggleContrast() {
    contrastToggle = !contrastToggle;
    contrastToggle
      ? (document.body.classList += " dark-theme")
      : document.body.classList.remove("dark-theme");
  }

  function toggleModal() {
    document.body.classList += " modal--open";
  }

  return (
    <section id="landing-page">
      <nav>
        <figure>
          <img id="personal-logo" src={logo} />
        </figure>
        <ul className="nav__link--list">
          <li className="nav__link">
            <a
              className="
                        nav__link--anchor
                        link__hover-effect
                        link__hover-effect--black"
              onClick={toggleModal}
            >
              About
            </a>
          </li>
          <li className="nav__link">
            <a
              href="#projects"
              className="
                        nav__link--anchor
                        link__hover-effect
                        link__hover-effect--black"
            >
              Projects
            </a>
          </li>
          <li className="nav__link">
            <a
              href="#"
              className="
                        nav__link--anchor
                        link__hover-effect
                        link__hover-effect--black"
              onClick={toggleModal}
            >
              Contacts
            </a>
          </li>
          <li className="nav__link click" onClick={toggleContrast}>
            <a
              href="#"
              className="
                        nav__link--anchor
                        link__hover-effect
                        link__hover-effect--black
                        "
            >
              <i className="fas fa-adjust"></i>
            </a>
          </li>
        </ul>
      </nav>
      <header className="header">
        <div className="header__content">
          <h1 className="title">Hello </h1>
          <h1 className="title--green">I'm Abdullah...</h1>
          <p className="header__para">
            I'm a <b className="green">Frontend Software Engineer</b> with a
            strong passion for building web applications with great user
            experiences.
            <br />
            Here's a bit more <b className="green click">about me</b>.
          </p>
          <div className="social__list">
            <a
              href="https://www.linkedin.com/in/abdullah-mohamud/"
              target="_blank"
              className="social__link click"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/mohamuda"
              target="_blank"
              className="social__link click"
            >
              <i className="fab fa-github"></i>
            </a>
            <a href={Resume} target="_blank" className="social__link click">
              <i className="fas fa-file-pdf"></i>
            </a>
          </div>
        </div>
      </header>
      <button className="mail_btn click" onClick={toggleModal}>
        <i className="fas fa-envelope"></i>
      </button>
      <a href="projects" className="scroll">
        <div className="scroll__icon click"></div>
      </a>

      <Modal />
    </section>
  );
}
