import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMoviePhotos } from "../../actions";

export default function Photos() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieImages = useSelector((state) => state.movieImages);
  const getMovieImages = (id) => {
    dispatch(getMoviePhotos(id));
  };
  console.log(movieImages);
  useEffect(() => {
    getMovieImages(id);
    if(movieImages){
      
    }
  
  }, []);
  return (
    <div className="photos px-3">
      <div className="row">
        {movieImages &&
          movieImages.map((image) => {
            return (
              <div className="col-md-2 my-2">
                <img src={`https://image.tmdb.org/t/p/original/${image.file_path}`} className="" style={{width:'100%',height:'100%'}} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
}
