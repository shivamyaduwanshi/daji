
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axiosClient from 'utils/axios-client';
import { useEffect, useState } from 'react';
import './Banner.scss';

const Banner = () => {

  const [banners, setBanners] = useState([]);

  var settings = {
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 300,
  };

  const getBanners = () => {
    axiosClient('/banners')
      .then((response) => {
        setBanners(response.data.data);
      });
  }

  useEffect(() => {
    getBanners();
  }, []);

  return (
    <div className="banner">
      <Slider {...settings}>
        {
          banners.map((banner: any) => {
            return (
              <div className="banner-item" key={banner.id}>
                <img src={banner.imageUrl} alt="banner-1" />
              </div>
            );
          })
        }
      </Slider>
    </div>
  )
}

export default Banner;