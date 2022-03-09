import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {  getTvImages } from "../../actions";

export default function PhotosTv() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const tvShowImages = useSelector((state) => state.tvShowImages);
  const getTvShowImages = (id) => {
    dispatch(getTvImages(id));
  };
  useEffect(() => {
    getTvShowImages(id);
    if(tvShowImages){
      
    }
  
  }, []);
  return (
    <div className="photos px-3">
      <div className="row">
        {tvShowImages &&
          tvShowImages.map((image) => {
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
