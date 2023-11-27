import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


function Contact() {
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p><FontAwesomeIcon icon={faEnvelope} />tejaswiniswain123@gmail.com</p>
            <FontAwesomeIcon icon={faPhone} /> <p> 7683841679</p>
            <div className="social-icons">
              <a href="https://github.com/SwainTejaswini"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="https://instagram.com/t_e_j_preetiswain?igshid=MTk0NTkyODZkYg%3D%3D&utm_source=qr"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="http://linkedin.com/in/tejaswini-swain-a935ab246"><FontAwesomeIcon icon={faLinkedin}/></a>
            </div>
            <a href="my-cv.pdf" download className="btn btn2">Download CV</a>
          </div>

          <div className="contact-right"></div>

          <form>
            <input type="text" name="Name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your email" required />
            <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
            <button type="submit" className="btn btn2">Submit</button>
          </form>
        </div>
      </div>

      <div className="copyright">
        <p>Copyright @ Tejaswini Swain <i className="fa-solid fa-heart"></i> </p>
      </div>
    </div>
  );
}

export default Contact;
