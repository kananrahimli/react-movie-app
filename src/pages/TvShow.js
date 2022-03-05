import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getTvShowByID } from '../actions'
import star from './star.png'
export default function TvShow() {
    const tvShowItem=useSelector(state=>state.tvShowItem)
    const dispatch=useDispatch()
    const {id}=useParams()
    console.log(tvShowItem);
    console.log(id);
    const getTvShow=(id)=>{
       dispatch(getTvShowByID(id))
    }
    useEffect(()=>{
        getTvShow(id)
    },[])
  return (
    <div className='tv-show '>
        <div className="header position-relative ">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original/${tvShowItem.backdrop_path?tvShowItem.backdrop_path:tvShowItem.poster_path}`}
              alt="ododod"
            />

            <div className="movie-detail backdrop pt-5">
              <div className="movie-desc">
                <h1 className="moviename text-white mt-5 ml-4">
                  {tvShowItem.original_title}
                </h1>

                <div className="d-flex  align-items-center">
                  <h3 className="text-white font-weight-bold text-white mx-4 my-3 d-flex  align-items-center ">
                    <img
                      src={star}
                      alt=""
                      style={{ width: "20px", height: "20px" }}
                      className="mr-1"
                    ></img>{" "}
                    <span>{tvShowItem.vote_average}</span>
                  </h3>     

                  <h5 className="text-white mt-2" >{tvShowItem.vote_count} Reviews</h5>

                  <h5 className="text-white mt-2 ml-4" >{tvShowItem.release_date}</h5>
                  
                </div>

                <p className="mx-4 text-white w-50">{tvShowItem.overview}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
