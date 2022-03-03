import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieById } from "../actions";
export default function Movie() {
    const movieItem=useSelector(state=>state.movieItem)
    const dispatch=useDispatch()
    const {id}=useParams()
    useEffect(()=>{
        getMovieItem(id)
    },[])
    const getMovieItem=(id)=>{
        dispatch(getMovieById(id))
    }
    
  return (
    <div className="movie">
        {movieItem && <div className="header position-relative ">
          
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original/${movieItem.backdrop_path}`}
              alt="ododod"
            />
  
            <div className="movie-detail backdrop pt-5">
              <div className="movie-desc">
                <h1 className="moviename text-white mt-5 ml-4">
                  {movieItem.original_title}
                </h1>
                <h3 className="text-white font-weight-bold text-warning mx-4 my-3">
                  IMDB:{movieItem.vote_average}
                </h3>
                <p className="mx-4 text-white w-50">{movieItem.overview}</p>
              </div>
            </div>
          </div>
        </div>}
      
    </div>
  );
}
