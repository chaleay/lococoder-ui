/* eslint-disable arrow-body-style */
import React from 'react';
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { FiMail, FiLinkedin } from 'react-icons/fi';

const contact = () => {
  return (
    <div className="contact">
      <h1> Follow me </h1>
      <div className="contact__content">
        <div className="contact__content__box">
          <a
            href="https://www.linkedin.com/in/elijahcgaytan/
          "
          >
            <FiLinkedin className="contact__icons" />
          </a>
        </div>
        <div className="contact__content__box">
          <a href="https://twitter.com/chaleayyy">
            <AiOutlineTwitter className="contact__icons" />
          </a>
        </div>
        <div className="contact__content__box">
          <a href="https://www.instagram.com/elijahliftsweights/">
            <AiOutlineInstagram className="contact__icons" />
          </a>
        </div>
      </div>
      <h1>Contact Me</h1>
      <div className="contact__contact-me-box">
        <h3>
          If you need to get in touch with me for whatever reason, use the email
          below. Allow 2-3 days for a response
        </h3>
        <div className="contact__contact-me-box__email">
          <a href="mailto:elijahgaytan@protomail">
            <FiMail className="contact__icons"></FiMail>
            <h6>elijahgaytan@protonmail.com</h6>
          </a>
        </div>
      </div>
    </div>
  );
};

export default contact;
