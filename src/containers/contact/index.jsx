import React from "react";
import PageHeaderContent from "../../components/pageheadercontent";
import { BsInfoCircleFill, BsLinkedin, BsWhatsapp, BsEnvelope } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import "./styles.scss";

const Contact = () => {
    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
  return (
    <section id="contact" className="contact">
         
      <div id="my-contact-header" className="contact__header">
      {<BsInfoCircleFill size={60} />}
        <h1>   Connect with Me :</h1>
          
      </div>
       
      
      <div className="contact__content">
        <div className="contact__content__info">
          <div className="contact__content__info__item">
            <BsEnvelope size={30} />
            <span>Email: vinaynayak0301@gmail.com</span>
          </div>

          <div className="contact__content__info__item">
            <BsWhatsapp size={30} />
            <span>WhatsApp: +91 85534 16011</span>
          </div>

          <div className="contact__content__info__item">
            <SiLeetcode size={30} />
            <span>LeetCode: <a href="https://leetcode.com/u/eruiluvatar0301/" target="_blank" rel="noopener noreferrer">eruiluvatar0301</a></span>

          </div>

          <div className="contact__content__info__item">
            <BsLinkedin size={30} />
            <span>LinkedIn: <a href="https://www.linkedin.com/in/vinay-nayak-b5804325b">Vinay Nayak</a></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
