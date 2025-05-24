import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Images = () => {
      var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div >
        <img className='h-fit w-fit' src="https://i.ibb.co/6JVhVwPG/Green-and-White-Modern-Hydroponic-Gardening-Workshops-Banner.png" alt="" />
      </div>
      <div >
        <img className='h-fit w-fit' src="https://i.ibb.co/yB01BYgC/Green-and-Yellow-Minimalist-Gardening-Workshop-Medium-Banner.png" alt="" />
      </div>
      <div >
        <img className='h-fit w-fit's src="https://i.ibb.co/DgGGbgZz/Green-Minimalist-Gardening-Workshop-Medium-Banner.png" alt="" />
      </div>
      
      
    </Slider>
  );
}

export default Images;