
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axiosClient from 'utils/axios-client';
import { useEffect, useState } from 'react';
import './Banner.scss';

const Banner = () => {

  const [banners, setBanners] = useState([]);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
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