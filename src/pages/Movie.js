import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet, NavLink,NavNavLink } from "react-router-dom";
import star from "./star.png";
import "./movie.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieById, getMovieVideos, getPersonCast } from "../actions";
import OverView from "../components/movie-sections/OverView";
import { Swiper, SwiperSlide } from "swiper/react";
// import OverView from "../components/movie-sections/OverView";
export default function Movie() {
  const movieItem = useSelector((state) => state.movieItem);
  const movieCasts=useSelector(state=>state.movieCasts)
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    getMovieItem(id);
    getMovieItemVideos(id)
    getMovieCasts(id)
  }, []);
  const getMovieItem = (id) => {
    dispatch(getMovieById(id));
  };
  const getMovieItemVideos=(id)=>{
    dispatch(getMovieVideos(id))
  }

  const getMovieCasts=(id)=>{
    dispatch(getPersonCast(id))
  }

  return (
    <div className="movie">
      {/* {movieItem && (
        <div className="header position-relative ">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original/${movieItem.belongs_to_collection?movieItem.belongs_to_collection.backdrop_path:movieItem.backdrop_path}`}
              alt="ododod"
            />

            <div className="movie-detail backdrop pt-5">
              <div className="movie-desc">
                <h1 className="moviename text-white mt-5 ml-4">
                  {movieItem.original_title}
                </h1>

                <div className="d-flex  align-items-center">
                  <h3 className="text-white font-weight-bold text-white mx-4 my-3 d-flex  align-items-center ">
                    <img
                      src={star}
                      alt=""
                      style={{ width: "20px", height: "20px" }}
                      className="mr-1"
                    ></img>{" "}
                    <span>{movieItem.vote_average}</span>
                  </h3>     

                  <h5 className="text-white mt-2" >{movieItem.vote_count} Reviews</h5>

                  <h5 className="text-white mt-2 ml-4" >{movieItem.release_date}</h5>
                  
                </div>

                <p className="mx-4 text-white w-50">{movieItem.overview}</p>
              </div>
            </div>
          </div>
        </div>
      )} */}

      <div className="movie-menu  d-flex justify-content-center mt-5">
        <ul className="list-unstyled text-white d-flex ">
          <li> <NavLink className="text-white" end  to='overview'>Overview</NavLink> </li>
          <li className="mx-5"><NavLink className="text-white" end to='videos'>Videos</NavLink> </li>
          <li><NavLink className="text-white" end to='photos'>Photos</NavLink></li>
          
        </ul>
      </div>

      <Outlet />

      <div className="movie-cast px-5 pt-5 mt-5">
        <div className="row">
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
        {movieCasts &&
          movieCasts.map((person) => {
            return (
              <SwiperSlide>
                <div className="trending-movies-item" key={person.id}>
                  <div className="trending-movies-item-img ">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${person.profile_path}`}
                      className="" style={{width:'100%',height:'100%'}} alt=""
                    />

                  </div>
                  <div className="trending-movies-item-name">
                    <span className="text-white"> {person.name}</span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
        </div>
      </div>
    </div>
  );
}
