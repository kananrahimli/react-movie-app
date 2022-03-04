import React, { useEffect, useState } from "react";
import star from "./star.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./movies.css";
import { getAllMovies } from "../actions";
import { getSearchMovie } from "../actions";
import { Link } from "react-router-dom";
export default function Movies() {
  const allMovies = useSelector((state) => state.allMovies);
  const dispatch = useDispatch();
  const [page,setPage]=useState(1)
  const [searchMovie,setSearchMovie]=useState('')
  const getMovies = (page) => {
    dispatch(getAllMovies(page));
  };
  useEffect(() => {
    getMovies(page);
  }, []);

  const prevPage=()=>{
    if(page<=1){
      setPage(1)
    }else{
      setPage(page-1)
    }
    getMovies(page);
    
  }
  const nextPage=()=>{
    
    if(page===1){
      setPage(2)
      
    }else{
      setPage(page+1)
    }
    console.log(page);
    
    getMovies(page);
    
  }

  const handleChange=(event)=>{
    setSearchMovie(event.target.value)
    dispatch(getSearchMovie(searchMovie))
    if(searchMovie===''){
      dispatch(getAllMovies(1))
    }
  }
  return (
    <div className="movies px-4 mt-5 pt-4">
      <h1 className="text-white mx-3">Movies</h1>
      <div className="row px-3">
        <div className="col-lg-6">
          <div className="input-group my-4">
            <input type="text" placeholder="Search" name="search" onChange={handleChange} value={searchMovie}/>
          </div>
        </div>
      </div>

      <div className="row ">
        {allMovies &&
          allMovies.map((movie) => {
            return (
              <div className="col-md-3 px-0 mx-0">
                <Link to={`/movie/${movie.id}`}>
                  <div className="trending-movies notSlider" key={movie.id}>
                    <div className="trending-movies-item-img ">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        className="img-fluid"
                      ></img>

                      <div className="star d-flex  align-items-center">
                        <img
                          src={star}
                          style={{ width: "16px", height: "16px" }}
                          className="mr-1"
                        ></img>
                        <span className="text-white">
                          {movie.vote_average}/10
                        </span>
                      </div>

                      <div className="date">
                        <span className="text-white">{movie.release_date}</span>
                      </div>
                    </div>
                    <div className="trending-movies-item-name">
                      <span className="text-white"> {movie.title}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}

          <div className="movies-pagination mt-3 d-flex justify-content-center w-100">
             <button className="prev" onClick={()=>prevPage()}>Prev</button>
             <button className="next" onClick={()=>nextPage()}>Next</button>
          </div>
      </div>
    </div>
  );
}
