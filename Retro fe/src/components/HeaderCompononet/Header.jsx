import React, { useEffect, useState } from "react";
import "./Header.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

function Header() {
  const [dbData, setDbData] = useState([]);
  async function getFetch() {
    const response = await fetch("http://localhost:3003/film/");
    const data = await response.json();
    setDbData(data);
  }
  useEffect(() => {
    getFetch();
  }, []);
const name=dbData[1]
  return (
    <div className="header">
      <div className="header_container">
      <div className="topPart">
      <div className="upperText">
          <h6>FILM & AZE</h6>
        </div>
        <div className="slider">
          <Swiper
            slidesPerView={5}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {dbData.map((item) => (
              <SwiperSlide><Link >{item.title} <span>-</span></Link></SwiperSlide>
            ))}{" "}
          </Swiper>
        </div>
      </div>
      <div className="bottomPart">
        <div className="bottomPart_container">
            <div className="top">
                <div className="title">
                    <h5>{}</h5>
                    {
                        // console.log(name.title)
                    }
                </div>
            </div>
        </div>
      </div>

      </div>
    </div>
  );
}

export default Header;
