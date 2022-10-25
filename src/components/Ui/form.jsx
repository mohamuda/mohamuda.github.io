import React from "react";

export default function form({ form, sendEmail }) {
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      id="contact__form"
      className="form__contact"
    >
      <div className="form__item">
        <label className="form__item--label">Name</label>
        <input className="input" name="user_name" type="text" required></input>
      </div>
      <div className="form__item">
        <label className="form__item--label">Email</label>
        <input
          className="input"
          name="user_email"
          type="email"
          required
        ></input>
      </div>
      <div className="form__item">
        <label className="form__item--label">Message</label>
        <textarea
          className="input"
          name="message"
          type="text"
          required
        ></textarea>
      </div>
      <button id="contact__submit" className="form__submit">
        Send it my way
      </button>
    </form>
  );
}
