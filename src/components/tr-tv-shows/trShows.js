import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import star from "./star.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./trShows.css";
// import required modules
// import { Navigation, Pagination } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { getTopRatedTvShows } from "../../actions";
import Loading from "../Loading.js/Loading";
import { Link } from "react-router-dom";
export default function TvShows() {
  const trendingTvShows = useSelector((state) => state.trendingTvShows);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const getTrendingTvShows = () => {
    dispatch(getTopRatedTvShows());
  };
  useEffect(() => {
    getTrendingTvShows();
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="trending-movies">
      {!loading && (
        <h1>
          Trending Tv Shows <span>Explore all</span>
        </h1>
      )}

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
        {trendingTvShows &&
          trendingTvShows.map((trendingTvShow) => {
            return (
              <SwiperSlide>
                <Link to={`/tv-show/${trendingTvShow.id}`}>
                  <div className="trending-movies-item" key={trendingTvShow.id}>
                    <div className="trending-movies-item-img ">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${trendingTvShow.poster_path}`}
                        className="img-fluid"
                      ></img>

                      <div className="star d-flex  align-items-center">
                        <img
                          src={star}
                          style={{ width: "16px", height: "16px" }}
                          className="mr-1"
                        ></img>
                        <span className="text-white">
                          {trendingTvShow.vote_average}/10
                        </span>
                      </div>

                      <div className="date">
                        <span className="text-white">
                          {trendingTvShow.release_date}
                        </span>
                      </div>
                    </div>
                    <div className="trending-movies-item-name">
                      <span className="text-white">
                        {" "}
                        {trendingTvShow.original_name}
                      </span>
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
