import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import "./videos.css";
import YouTube from 'react-youtube';
import { getTvVideos } from "../../actions";
export default function VideosTv() {
  const videos = useSelector((state) => state.tvShowVideos);
  const dispatch=useDispatch();
  const {id}=useParams()
  const getTvShowMovies=(id)=>{
   dispatch(getTvVideos(id))
  }
  useEffect(()=>{
    getTvShowMovies(id)
  },[])
  console.log(videos);
  return (
    <div className="videos">
      <div className="row  justify-content-around ">
        {videos &&
          videos.map((video) => {
            return (
              <div className="col-md-6 mt-4 text-center">
                
                <div className="item">
                <YouTube videoId={video.key}></YouTube>
                  {/* <div className="link">
                    <div className="image lazyloaded">
                      <img
                        className="lazyload"
                        src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                      />
                      <div className="play__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 55 55"
                        >
                          <circle
                            cx="27.5"
                            cy="27.5"
                            r="26.75"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M20.97 40.81L40.64 27.5 20.97 14.19v26.62z"
                          />
                        </svg>
                      </div>
                    </div>
                    
                  </div> */}
                  
                </div>
                <div className="name text-white">{video.name}</div>
                 <div className="type text-white">{video.type}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
