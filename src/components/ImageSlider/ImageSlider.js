import React, { Component } from 'react';

import 'react-slideshow-image/dist/styles.css'
import './ImageSlider.css'

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import image0 from "../../assets/images/face/dog-1912874_960_720.jpg"
import image1 from "../../assets/images/face/health-4385852_960_720.jpg"
import image2 from "../../assets/images/face/microscope-2352651_960_720.jpg"
import image3 from "../../assets/images/face/veterinary-85925_960_720.jpg"
import image4 from "../../assets/images/face/microscope-2352651_960_720.jpg"

export default class JelaImageSlider extends Component {
  render() {
    return (
      <AliceCarousel autoPlay disableButtonsControls autoPlayInterval="3000">
        <img src={image0} className="sliderimg"/>
        <img src={image1} className="sliderimg"/>
        <img src={image2} className="sliderimg"/>
        <img src={image3} className="sliderimg"/>
        <img src={image4} className="sliderimg"/>
      </AliceCarousel>
    )
  }
}