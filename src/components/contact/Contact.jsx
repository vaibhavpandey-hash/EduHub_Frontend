import React from 'react';
import "./contact.css"
import contactImage from "./contact.png"; // Importing the image file

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-section">
        <h1 className="heading">contact us</h1>
        <div className="row">
          <div className="image">
            {/* Using the imported image */}
            <img src={contactImage} alt="Contact" />
          </div>
          <form action="">
            <h3>send us a message</h3>
            <input type="text" placeholder="name" className="box" />
            <input type="email" placeholder="email" className="box" />
            <input type="number" placeholder="phone number" className="box" />
            <textarea placeholder="message" className="box" cols="30" rows="10"></textarea>
            <button type="submit" className="btn">
              <span className="text text-1">send message</span>
              <span className="text text-2" aria-hidden="true">send message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
