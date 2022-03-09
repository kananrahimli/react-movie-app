import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTvShowByID } from "../../actions";

export default function OverviewTv() {
  const tvShowItem = useSelector((state) => state.tvShowItem);
  // const dispatch = useDispatch();
  // console.log(tvShowItem);
  // const { id } = useParams();
  // useEffect(() => {
  //   dispatch(getTvShowByID(id));

  // }, [id]);
  
  return (
    <div className="px-4 ">
      <div className="row justify-content-md-start justify-content-between my-3 align-items-center">
        <div className="col-md-3">
          {tvShowItem && (
            <img
              src={`https://image.tmdb.org/t/p/original/${tvShowItem.poster_path}`}
              alt=""
              className="img-fluid"
            ></img>
          )}
        </div>
        <div className="col-md-9 text-white mt-md-0 mt-5">
          <div className="row">
            <div className="col-md-6 col-9">
              <h4 className="text-white">Storyline</h4>
              <p className="my-2">{tvShowItem && tvShowItem.overview}</p>
            </div>
          </div>

          <div className="row justify-content-md-start justify-content-between my-3 ">
            <h5 className="col-1">Released</h5>

            <span className="ml-5 col-md-4 col-8 text-danger ">
              {tvShowItem && tvShowItem.first_air_date}
            </span>
          </div>
          
          <div className="row justify-content-md-start justify-content-between my-3 ">
            <h5 className="col-1">Genre</h5>
            <span className="ml-5 col-md-4 col-8 text-danger">
              {tvShowItem.genres && tvShowItem.genres.map((element) => {
                  return <span className="mr-1">{element.name},</span>;
                })}
            </span>
          </div>
          <div className="row justify-content-md-start justify-content-between my-3 ">
            <h5 className="col-1">Status</h5>

            <span className="ml-5 col-md-4 col-8 text-danger">{tvShowItem && tvShowItem.status}</span>
          </div>
          <div className="row justify-content-md-start justify-content-between my-3 ">
            <h5 className="col-1">Language</h5>

            <span className="ml-5 col-md-4 col-8 text-danger">
                {tvShowItem && tvShowItem.spoken_languages?tvShowItem.spoken_languages.map(lang=>{
                    return (
                        <span >{lang.english_name},</span>
                    )
                }):'English'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
