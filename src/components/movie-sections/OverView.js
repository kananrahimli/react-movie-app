import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../actions";

export default function OverView() {
  const movieItem = useSelector((state) => state.movieItem);
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    dispatch(getMovieById(id));

  }, []);
  
  return (
    <div className="px-4 ">
      <div className="row justify-content-md-start justify-content-between my-3 align-items-center">
        <div className="col-md-3">
          {movieItem && (
            <img
              src={`https://image.tmdb.org/t/p/original/${movieItem.belongs_to_collection?movieItem.belongs_to_collection.poster_path:movieItem.poster_path}`}
              alt=""
              className="img-fluid"
            ></img>
          )}
        </div>
        <div className="col-md-9 text-white mt-md-0 mt-5">
          <div className="row">
            <div className="col-md-6 col-9">
              <h4 className="text-white">Storyline</h4>
              <p className="my-2">{movieItem && movieItem.overview}</p>
            </div>
          </div>

          <div className="row justify-content-md-start justify-content-between my-3 ">
            <h5 className="col-1">Released</h5>

            <span className="ml-5 col-md-4 col-8 text-danger ">
              {movieItem && movieItem.release_date}
            </span>
          </div>
          <div className="row justify-content-md-start justify-content-between my-3">
            <h5 className="col-1">Runtime</h5>
            <span className="ml-5 col-md-4 col-8 text-danger">
              {movieItem && movieItem.runtime} minutes
            </span>
          </div>
          <div className="row justify-content-md-start justify-content-between my-3 ">
            <h5 className="col-1">Genre</h5>
            <span className="ml-5 col-md-4 col-8 text-danger">
              {movieItem &&
                movieItem.genres.map((element) => {
                  return <span className="mr-1">{element.name},</span>;
                })}
            </span>
          </div>
          <div className="row justify-content-md-start justify-content-between my-3 ">
            <h5 className="col-1">Status</h5>

            <span className="ml-5 col-md-4 col-8 text-danger">{movieItem && movieItem.status}</span>
          </div>
          <div className="row justify-content-md-start justify-content-between my-3 ">
            <h5 className="col-1">Language</h5>

            <span className="ml-5 col-md-4 col-8 text-danger">
                {movieItem && movieItem.spoken_languages.map(lang=>{
                    return (
                        <span >{lang.english_name},</span>
                    )
                })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
