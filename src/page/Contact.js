import React from "react";
import "../css/Contact.css";
function Contact() {
  return (
    <div className="contact component__space" id="Contact">
      <div className="contact__box">
        <div className="contact__meta">
          <h1 className="hire__text">Hire Me.</h1>
          <p className="hire__text white">
            {" "}
            Iam avaiable for freelance work. Connect with me via :
          </p>
          <p className="hire__text white">
            <strong>
              <a
                href="https://wa.me/6282278885942"
                target={"_blank"}
                style={{ color: "#000000" }}
              >
                Whatsapp
              </a>
            </strong>{" "}
            or{" "}
            <strong>
              <a
                href="mailto:muhamadlukman937@gmail.com?subject = Aku akan menghire kamu&body = Hallo Lukman,"
                style={{ color: "#000000" }}
                target={"_blank"}
              >
                Email
              </a>
            </strong>
          </p>
        </div>
        <div className="input__box">
          <form method="">
            <input
              name="your_name"
              type="text"
              placeholder="Your Name ..."
              className="contact name"
            />
            <input
              name="your_email"
              type="text"
              placeholder="Your Email ..."
              className="contact email"
            />
            <input
              name="your_subject"
              type="text"
              placeholder="Write a subject ..."
              className="contact subject"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Write your message ..."
            ></textarea>
            <button className="btn contact pointer" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
