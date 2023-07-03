import React from "react";
// import { Container } from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from "react-bootstrap";

import SlideOne from "./SlideOne";
// import { sliderDataone, responsive } from './Data';

import { productData, responsive } from "./Data";

function Essentials() {
  //  const sliders =  sliderDataone.map((item,index)=>{
  //     <SlideOne key={index} url={item.imgurl} heading={item.heading} cont={item.cont} link={item.link}/>
  //   })
  //   console.log(sliders)
  const product = productData.map((item, index) => (
    <SlideOne
      key={index}
      url={item.imgurl}
      heading={item.heading}
      text={item.text}
      link={item.link}
    />
  ));
  return (
    <section id="essentials-sec" className="pos-rel">
      <div className="heading-sec">
        <h1>
          Learn the essentials <span></span>
        </h1>
        <p>
          Get up to speed on Bitcoin, Ethereum, Web3 wallet, Decentralised
          Finance (DeFi) and basics of crypto ecosystem.{" "}
        </p>
      </div>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={3000}
        autoPlay={true}
        customTransition="all 1s"
        transitionDuration={1000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {product}
      </Carousel>
      <div className="essentials-btn">
        <Button variant="primary" size="lg" className="ess-btn-left">
          Get Started
        </Button>
        <Button variant="primary" size="lg" className="ess-btn">
          Learn More
        </Button>
      </div>
    </section>
  );
}

export default Essentials;
