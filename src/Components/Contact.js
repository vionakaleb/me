import React, { Component } from "react";
import { Fade } from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const {
      contactmessage: message,
      // name,
      // phone,
      // address: {
        // street,
        // city,
        // state,
        // zip,
      // }, 
    } = this.props.data;
    
    const email = this.props.data.social?.find(soc => soc.name === "Email")?.url;
    const linkedin = this.props.data.social?.find(soc => soc.name === "LinkedIn");

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch</span>
              </h1>
            </div>

            <div className="ten columns">
              <p style={{margin: 0, width: "100%"}}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a onClick={() => window.open(`mailto:${email}`)} className="button" style={{width: "100%"}}>
                  <i class="fa fa-envelope" aria-hidden="true"></i> {message}
                </a>
              </p>
              <p style={{margin: "0 0 0 0.5rem", cursor: "pointer"}}>
                Or reach me
                {/* <a href="https://linkedin.com/in/vionakaleb" target="_blank" rel="noreferrer" style={{cursor: "pointer"}}>Or reach me on <b>LinkedIn</b>.</a> */}
              </p>
              <a href={linkedin?.url} target="_blank" className="button btn linkedin-btn" rel="noreferrer">
                <i className={linkedin?.className}></i>{" "}LinkedIn
              </a>
            </div>
          </div>
        </Fade>

        {/* <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form action="" method="post" id="contactForm" name="contactForm">
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactName"
                      name="contactName"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactEmail"
                      name="contactEmail"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactSubject"
                      name="contactSubject"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols="50"
                      rows="15"
                      id="contactMessage"
                      name="contactMessage"
                    ></textarea>
                  </div>

                  <div>
                    <button className="submit">Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>

              <div id="message-warning"> Error boy</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  {name}
                  <br />
                  {street} <br />
                  {city}, {state} {zip}
                  <br />
                  <span>{phone}</span>
                </p>
              </div>
              <div className="widget widget_tweets">
                <h4 className="widget-title">Latest Tweets</h4>
                <ul id="twitter">
                  <li>
                    <span>
                      This is Photoshop's version of Lorem Ipsum. Proin gravida
                      nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                      quis bibendum auctor, nisi elit consequat ipsum
                      <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                      <a href="./">2 Days Ago</a>
                    </b>
                  </li>
                  <li>
                    <span>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi
                      <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                      <a href="./">3 Days Ago</a>
                    </b>
                  </li>
                </ul>
              </div>
            </aside>
          </Slide>
        </div> */}
      </section>
    );
  }
}

export default Contact;
