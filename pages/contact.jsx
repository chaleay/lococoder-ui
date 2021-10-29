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
          <a href="https://www.instagram.com/elijahhchristian">
            <AiOutlineInstagram className="contact__icons" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default contact;
