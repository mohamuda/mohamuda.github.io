import React, { useRef } from "react";
import HTML5img from "../assets/240px-HTML5_Badge.svg.png";
import Cssimg from "../assets/CSS.png";
import Jsimg from "../assets/javascript.png";
import Tsimg from "../assets/Typescript_logo_2020.svg.png";
import Reactimg from "../assets/Reactimg.png";
import Firebaseimg from "../assets/Firebase.png";
import Form from "./Ui/form";
import emailjs from "emailjs-com";

export default function Modal() {
  function toggleModal() {
    document.body.classList.remove("modal--open");
  }
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    const formContact = document.querySelector(".form__contact");
    const inputs = document.querySelectorAll(".input");
    loading.classList += " modal__overlay--visible";

    emailjs
      .sendForm(
        "service_r5x1idl",
        "template_maphh8p",
        form.current,
        "HZ7E-1uMPCqSyrnjn"
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
        return new Promise(function (resolve, reject) {
          setTimeout(() => {
            success.classList.remove("modal__overlay--visible");
            formContact.classList += " modal__overlay--visible";
            inputs.forEach((input) => (input.value = ""));
            resolve();
          }, 5000);
        });
      })
      .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email service is temporarily unavailable. Please contact me directly at reuelpalancas@gmail.com"
        );
      });
  };

  return (
    <div className="modal">
      <div className="modal__half modal__about">
        <h3 className="modal__title modal__title--about">
          Here's a bit about me.
        </h3>
        <h4 className="modal__sub-title modal__sub-title--about">
          Frontend Software Engineer.
        </h4>
        <p className="modal__para">
          Greetings! My name is Abdullah and{" "}
          <b className="green">I'm a Frontend Software Engineer</b>. I'm
          passionate about Web Development, and always looking to learn more.
          I'm looking forward to taking on a{" "}
          <b className="green">new challenge and building web apps</b>. I've
          developed my own products and projects. Watching EPL soccer, playing
          basketball, or learning new things all with coding are my interests
          when I'm not typing away on VSCode.
        </p>

        <div className="modal__languages">
          <figure className="modal__language">
            <img className="modal__language--img" src={HTML5img} />
            <span className="language__name">HTML</span>
          </figure>
          <figure className="modal__language">
            <img className="modal__language--img" src={Cssimg} />
            <span className="language__name">CSS</span>
          </figure>
          <figure className="modal__language">
            <img className="modal__language--img" src={Jsimg} />
            <span className="language__name">JavaScript</span>
          </figure>
          <figure className="modal__language">
            <img className="modal__language--img" src={Tsimg} />
            <span className="language__name">TypeScript</span>
          </figure>

          <figure className="modal__language">
            <img className="modal__language--img" src={Reactimg} />
            <span className="language__name">React</span>
          </figure>
          <figure className="modal__language">
            <img className="modal__language--img" src={Firebaseimg} />
            <span className="language__name">Firebase</span>
          </figure>
        </div>
      </div>
      <div className="modal__half modal__contact">
        <i className="fas fa-times modal__exit click" onClick={toggleModal}></i>
        <h3 className="modal__title modal__title--contact">
          Let's have a chat!
        </h3>
        <h3 className="modal__sub-title modal__sub-title--contact">
          I'm currently open to new opportunities.
        </h3>
        <Form form={form} sendEmail={sendEmail} />
        <div className="modal__overlay modal__overlay--loading">
          <i className="fas fa-spinner"></i>
        </div>
        <div className="modal__overlay modal__overlay--success">
          Thanks for getting in touch! It will be a pleasure to speak with you
          soon.
        </div>
      </div>
    </div>
  );
}
