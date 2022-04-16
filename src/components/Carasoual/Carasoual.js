import React, { Component } from "react";
import Slider from "react-slick";
import "./cara.css";

export default class AutoPlay extends Component {
  render() {
    let settings_3 = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };
    return (
      <div className="carasoual" id="cara">
        <Slider {...settings_3}>
          <div className="images">
            <img src="../../assests/images/new6.jpg" />
          </div>

          <div className="images">
            <img src="../../assests/images/new7.jpg" />
          </div>
          <div className="images">
            <img src="../../assests/images/new8.jpg" />
          </div>
          <div className="images">
            <img src="../../assests/images/new9.jpg" />
          </div>
          <div className="images">
            <img src="../../assests/images/new10.jpg" />
          </div>
          <div className="images">
            <img src="../../assests/images/new1.jpg" />
          </div>
          <div className="images">
            <img src="../../assests/images/new2.jpg" />
          </div>
          <div className="images">
            <img src="../../assests/images/new3.jpg" />
          </div>
          <div className="images">
            <img src="../../assests/images/new4.jpg" />
          </div>
          <div className="images">
            <img src="../../assests/images/new1.jpg" />
          </div>
          <div className="images">
            <img src="../../assests/images/new3.jpg" />
          </div>
        </Slider>
      </div>
    );
  }
}
