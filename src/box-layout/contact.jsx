import React, { Component } from "react";
import ContactForm from "../ContentData/contactForm";

class Contact extends Component {
  render() {
    return (
      <section className="contact padding-tb text-start" id="Contact">
        <div className="container">
          <div className="section-header">
            <div className="title">
              <span
                className="category wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
              >
                Hire Me
              </span>
              <h2
                className="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".2s"
              >
                I Am Available For Your Next Awesome Project{" "}
                <span>Then Hire Me!</span>
              </h2>
            </div>
          </div>
          <div className="section-wrapper">
            <div
              className="maps wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".2s"
            >
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1413489.393373163!2d73.61982405237498!3d19.120906345437426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a91f9fc58d2d%3A0xdd579253b516d13a!2sNalasopara%20East%2C%20Nala%20Sopara%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1675186605660!5m2!1sen!2sin"></iframe>
            </div>
            <section className="banner-bottom">
              <div className="bottom-wrapper">
                <div
                  className="post-item wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".1s"
                >
                  <div className="post-thumb">
                    <img src="assets/images/icon/01.png" alt="banner" />
                  </div>
                  <div className="post-content">
                    <h5>Give me a Call</h5>
                    <h5>
                      <span>845-978-42-41</span>
                    </h5>
                  </div>
                </div>
                <div
                  className="post-item wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".3s"
                >
                  <div className="post-thumb">
                    <img src="assets/images/icon/02.png" alt="banner" />
                  </div>
                  <div className="post-content">
                    <h5>Send me a Message</h5>
                    <h5>
                      <span>shivamshukla13jun@gmail.com</span>
                    </h5>
                  </div>
                </div>
                {/* <div className="post-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                                    <div className="post-thumb">
                                        <img src="assets/images/icon/03.png" alt="banner" />
                                    </div>
                                    <div className="post-content">
                                        <h5>Visit our Location</h5>
                                        <h5><span>02/07 Suitland Street 120</span></h5>
                                    </div>
                                </div> */}
              </div>
            </section>
            <ContactForm />
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
