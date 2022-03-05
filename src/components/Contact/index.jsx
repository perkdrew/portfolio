import React from "react"

import "./styles.css"

const Contact = () => {

  return (
      <section id="contact" data-aos="zoom-in" data-aos-delay="300">
        <h1>CONTACT ME</h1>
        <div id="form" className="form">
          <form
            action="https://formspree.io/f/mqknbype"
            method="POST"
          >
            <div className="form-name">Name</div>
            <input
              type="text"
              className="form-control"
              name="firstName"
              required
            />
            <div className="form-name">Email</div>
            <input type="email" className="form-control" name="email" required />
            <div className="form-name">Subject</div>
            <input type="text" className="form-control" name="subject" />
            <div className="form-name">Message</div>
            <textarea
              placeholder=""
              name="message"
              className="form-control"
              rows="5"
              />
            <div className="form-group">
              <input className="submit-btn" type="submit" value="Send" />
            </div>
          </form>
        </div>
      </section>
  );
};

export default React.memo(Contact)
