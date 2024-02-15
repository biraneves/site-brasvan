import { useEffect, useRef } from 'react';
import { Partner } from '../../utils/partners/partners';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CarouselContainer, SlideEnvelope } from './styles';

type Props = {
  partners: Partner[];
};

const Carousel = ({ partners }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    autoplay: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {partners.map((partner) => (
          <SlideEnvelope key={partner.name}>
            <img src={partner.logo} alt={partner.name} />
          </SlideEnvelope>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default Carousel;
