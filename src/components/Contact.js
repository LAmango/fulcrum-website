import React from 'react'

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section>
        <form
          method="POST"
          name="Contact"
          date-netlify="true"
          netlify-honeypot="bot-field"
        >
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6"></textarea>
          </div>
          <input name="form-name" value="Contact" type="hidden" />
          <button type="submit" className="special">
            Send Message
          </button>
          <button type="reset">Clear</button>
        </form>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope"></span>
            <h3>Email</h3>
            <a href="mailto:info@fulcrumdm.org">info@fulcrumdm.org</a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-phone"></span>
            <h3>Phone</h3>
            <span href="tel:+12393028876">(239) 302-8876 </span>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-home"></span>
            <h3>Address</h3>
            <span>
              3510 Kraft Rd. Suite 200
              <br />
              Naples, FL. 34109
              <br />
              United States of America
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
)

export default Contact
