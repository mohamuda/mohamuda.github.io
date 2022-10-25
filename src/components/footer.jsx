import React from "react";
import logo from "../assets/LOGO-AMWHITE.png";
import Resume from "../assets/Abdullah Mohamud RESUME.pdf";

export default function footer() {
  function toggleModal() {
    document.body.classList += " modal--open";
  }

  return (
    <footer>
      <div className="containerfooter">
        <div className="row footer__row">
          <a href="#" className="footer__anchor">
            <figure className="footer__logo">
              <img src={logo} className="footer__logo--img" />
            </figure>
            <span className="footer__logo--popper">
              Top
              <i className="fas fa-arrow-up"></i>
            </span>
          </a>
          <div className="footer__social--list">
            <a
              href="https://github.com/mohamuda"
              className="
              footer__social--link
              link__hover-effect
              link__hover-effect--white
            "
            >
              GitHub
            </a>
            <a
              href="mailto:abdullahi.mohamud01@gmail.com"
              target="_blank"
              className="
              footer__social--link
              link__hover-effect
              link__hover-effect--white
            "
            >
              Email
            </a>
            <a
              href={Resume}
              target="_blank"
              className="
              footer__social--link
              link__hover-effect
              link__hover-effect--white
            "
            >
              Resume
            </a>
          </div>
          <div className="footer__copyright">
            Copyright &copy; 2022 Abdullahi Mohamud
          </div>
        </div>
      </div>
    </footer>
  );
}
