import React, { useEffect, useState } from "react";
import PlaceholderLoading from "react-placeholder-loading";
import star from "./star.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./movies.css";
import { getAllTvShows, getSearchTvShows } from "../actions";
import { getSearchMovie } from "../actions";
import { Link } from "react-router-dom";
import Loading from "../components/Loading.js/Loading";

export default function TvShows() {
  const allTvShows = useSelector((state) => state.allTvShows);
  const loading = useSelector((state) => state.loading);
  const [showPagination,setShowPagination]=useState(true)
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [searchMovie, setSearchMovie] = useState("");
  const getTvShows = (page) => {
    dispatch(getAllTvShows(page));
  };
  useEffect(() =>{
    window.scrollTo(0, 0);
    getTvShows(page)
  }, []);

  const prevPage = () => {
    if (page <= 1) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
    getTvShows(page);
  };
  const nextPage = () => {
    if (page === 1) {
      setPage(2);
    } else {
      setPage(page + 1);
    }
    console.log(page);

    getTvShows(page);
  };

  const handleChange = (event) => {
    setSearchMovie(event.target.value);
    dispatch(getSearchTvShows(searchMovie));

    if (searchMovie === "") {
      dispatch(getSearchTvShows(1));
      setShowPagination(true)
    }else{
      setShowPagination(false)
    }
  };

  if (loading) {
    return (
      <div className="movies px-4 mt-4 pt-4">
        <h1 className="text-white mx-3">Tv Shows</h1>
        <div className="row px-3">
          <div className="col-lg-6">
            <div className="input-group my-4">
              <input
                type="text"
                placeholder="Search"
                name="search"
                onChange={handleChange}
                value={searchMovie}
              />
            </div>
          </div>
        </div>
        <Loading></Loading>
      </div>
    );
  }

  return (
    <div className="movies px-4 mt-5 pt-4">
      <h1 className="text-white mx-3">TV Shows</h1>
      <div className="row px-3">
        <div className="col-lg-6">
          <div className="input-group my-4">
            <input
              type="text"
              placeholder="Search"
              name="search"
              onChange={handleChange}
              value={searchMovie}
            />
          </div>
        </div>
      </div>

      <div className="row ">
        {allTvShows &&
          allTvShows.map((movie) => {
            return (
              <div className="col-md-3 px-0 mx-0 mt-5">
                <Link to={`/tv-show/${movie.id}`}>
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
                    {loading && <div className="skeleton skeleton-img"></div>}

                    <div className="trending-movies-item-name">
                      <span className="text-white"> {movie.title}</span>
                      {loading && (
                        <div className="skeleton skeleton-text"></div>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}

        {showPagination && <div className="movies-pagination mt-3 d-flex justify-content-center w-100">
          <button className="prev" onClick={() => prevPage()}>
            Prev
          </button>
          <button className="next" onClick={() => nextPage()}>
            Next
          </button>
        </div>}
      </div>
    </div>
  );
}
