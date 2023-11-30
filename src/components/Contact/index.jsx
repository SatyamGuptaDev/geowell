import { useState, useEffect } from 'react'
import './index.css';
import Card from './card';
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {

  useEffect(() => {
    AOS.init({
        duration: 1500,
        delay: 500,
        once: true,
        easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className='contact-body'>
        <h1 className="heading" data-aos="zoom-out">Meet the <span className="span text-transparent bg-clip-text ">Team</span> </h1>
          <div className='contact-container' data-aos="fade-in" data-aos-delay="1000">
              <Card name="Satyam Gupta" title="Front-End Developer" image="https://i.postimg.cc/cJtN25jq/Whats-App-Image-2023-09-17-at-23-53-53.jpg"/>  
              <Card name="Satyam Singh" title="Front-End Developer" image="https://i.postimg.cc/T27vMRVj/singh.jpg"/>
              <Card name="Satvik Trivedi" title="ML Developer" image="https://i.postimg.cc/QdpKFWCr/IMG20231130005908.jpg"/>
          </div>
          <div className='contact-container' data-aos="fade-in" data-aos-delay="2000">
          <Card name="Shreeyansh Aditya " title="Back-End Developer" image="https://i.postimg.cc/FRSktPq3/shreeyansh.jpg" />
 
          </div>
      </div>

    </>
  )
}

export default Contact;
