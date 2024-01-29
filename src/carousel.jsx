import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { imageArray } from './image-mock';
import Next from './assets/Next.png';
import Prev from './assets/prev.png';

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button className={`absolute left-0 top-1/2 transform -translate-y-1/2 ml-3 z-10 text-white`} onClick={onClick}>
      <img src={Prev} alt="prev" />
    </button>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button className={` absolute right-0 top-1/2 transform -translate-y-1/2 mr-3 text-white`} onClick={onClick}>
      <img src={Next} alt="Next" />
    </button>
  );
};

const CarouselDemoAutoPlay = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Slider {...settings} className='bg-gray-200 pb-24'>
      {imageArray.map((imageUrl, index) => (
        <div key={index} className='mt-32 relative'>
          <img className='w-[50%] mx-auto h-[600px] text-center border-2 border-black' src={imageUrl} alt="" />
        </div>
      ))}
    </Slider>
  );
};

export default CarouselDemoAutoPlay;
