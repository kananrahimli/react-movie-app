import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import star from "./star.png";
import "./movie.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieById, getMovieVideos } from "../actions";
import OverView from "../components/movie-sections/OverView";
// import OverView from "../components/movie-sections/OverView";
export default function Movie() {
  const movieItem = useSelector((state) => state.movieItem);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    getMovieItem(id);
    getMovieItemVideos(id)
  }, []);
  const getMovieItem = (id) => {
    dispatch(getMovieById(id));
  };
  const getMovieItemVideos=(id)=>{
    dispatch(getMovieVideos(id))
  }

  return (
    <div className="movie">
      {movieItem && (
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
      )}

      <div className="movie-menu  d-flex justify-content-center mt-5">
        <ul className="list-unstyled text-white d-flex ">
          <li> <Link to='overview'>Overview</Link> </li>
          <li className="mx-5"><Link to='videos'>Videos</Link> </li>
          <li>Description</li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
}
