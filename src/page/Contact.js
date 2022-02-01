import React from "react";
import "../css/Contact.css";
import contactImg from '../img/about-9.jpg';
function Contact() {
  return (
    <div className="contact component__space" id="Contact">
        <div className="row">
            <div className="col__2">
                <div className="contact__box">
                    <div className="contact__meta">
                        <h1 className="hire__text">
                            Hire Me.
                        </h1>
                        <p className="hire__text white"> Iam avaiable for freelance work. Connect with me via phone : </p>
                        <p className="hire__text white"><strong>12129102121</strong> or email <strong>lasdskaj@gmail.com</strong></p>
                    </div>
                    <div className="input__box">
                        <input name="your_name" type='text' placeholder="Your Name ..." className="contact name"/>
                        <input name="your_email" type='text' placeholder="Your Email ..." className="contact email"/>
                        <input name="your_subject" type='text' placeholder="Write a subject ..." className="contact subject"/>
                        <textarea name="message" id="message" placeholder="Write your message ..."></textarea>
                        <button className="btn contact pointer" type="submit">Submit</button>
                    </div>
                </div>
            </div>
            <div className="col__2">
                <img src={contactImg} className="contact__img"/>
            </div>
        </div>
    </div>
  );
}

export default Contact;
