import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import star from "./star.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./trmovies.css";
// import required modules
// import { Navigation, Pagination } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { getTopRatedMovies } from "../../actions";
import { Link } from "react-router-dom";
export default function TrMovies() {
  const trendingMovies = useSelector((state) => state.trendingMovies);
  const dispatch = useDispatch();
  const getTrendingMovies = () => {
    dispatch(getTopRatedMovies());
  };
  useEffect(() => {
    getTrendingMovies();
    
  }, []);
  return (
    <div className="trending-movies">
      <h1>
        Trending Movies <span>Explore all</span>
      </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {trendingMovies &&
          trendingMovies.map((trendigMovie) => {
            return (
              <SwiperSlide>
                <Link to={`/movie/${trendigMovie.id}`}>
                <div className="trending-movies-item" key={trendigMovie.id}>
                  <div className="trending-movies-item-img ">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${trendigMovie.poster_path}`}
                      className="img-fluid"
                    ></img>

                    <div className="star d-flex  align-items-center">
                      <img
                        src={star}
                        style={{ width: "16px", height: "16px" }}
                        className="mr-1"
                      ></img>
                      <span className="text-white">
                        {trendigMovie.vote_average}/10
                      </span>
                    </div>

                    <div className="date">
                      <span className="text-white">
                        {trendigMovie.release_date}
                      </span>
                    </div>
                  </div>
                  <div className="trending-movies-item-name">
                    <span className="text-white"> {trendigMovie.title}</span>
                  </div>
                </div>
                </Link>
                
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
