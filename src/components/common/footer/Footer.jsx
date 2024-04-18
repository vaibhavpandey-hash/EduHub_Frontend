import React from 'react';
import "./footer.css";

function Footer() {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Navigate Knowledge, Find Us Here.</h3>
          <p>Discover our global educational platform, connecting learners with quality resources and expert guidance. Explore, learn, and grow with us!</p>
          <div className="share">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
        </div>
        <div className="box">
          <h3>contact us</h3>
          <p>+1234 587 1478</p>
          <a href="#" className="link">contact@eduhub.com</a>
        </div>
        <div className="box">
          <h3>Address</h3>
          <p>ABC Street <br/> XYZ City<br/> India</p>
        </div>
      </div>
      <div className="credit">created with<span>❤️‍</span>| EduHub 2024, <br/> All rights reserved!</div>
    </section>
  );
}

export default Footer;
