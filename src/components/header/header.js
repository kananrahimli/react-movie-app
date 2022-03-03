import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import SwiperCore, { Autoplay } from "swiper";
import axios from "axios";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./header.css";
// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
import { useSelector, useDispatch } from "react-redux";
import { getNowMovies } from "../../actions/index";
export default function Header() {
  SwiperCore.use([Autoplay]);
  const nowMovies = useSelector((state) => state.nowMovies);
  const dispatch = useDispatch();
  const getHeroMovies = () => {
    dispatch(getNowMovies());
  };
  useEffect(() => {
    getHeroMovies();
  }, []);

  return (
    <div className="header ">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        modules={[EffectFade]}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="mySwiper"
      >
        {nowMovies &&
          nowMovies.map((nowmovie) => {
            return (
              <SwiperSlide className=" " key={nowmovie.id}>
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${nowmovie.backdrop_path}`}
                    alt="ododod"
                  />

                  <div className="movie-detail backdrop pt-5">
                    <div className="movie-desc">
                    <h1 className="moviename text-white mt-5 ml-4">
                      {nowmovie.original_title}
                    </h1>
                    <h3 className="text-white font-weight-bold text-warning mx-4 my-3">
                      IMDB:{nowmovie.vote_average}
                    </h3>
                    <p className="mx-4 text-white w-50">{nowmovie.overview}</p>
                    </div>
                   
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg"alt='ododod' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg"alt='ododod' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt='ododod'/>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}
