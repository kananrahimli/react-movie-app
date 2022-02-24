
import { Swiper, SwiperSlide } from "swiper/react";
import React,{ useEffect, useState } from 'react'
import axios from "axios";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./header.css"
// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
 export default function Header() {
  const [nowMovies,setNowMovies]=useState(null);

  useEffect(()=>{
    getNowMovies()
  },[])

  const getNowMovies=()=>{
      axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=dd4d819639705d332d531217b4f7c6b6&page=1&language=en-US&region=US')
      .then((res)=>{
          console.log(res.data.results)
          setNowMovies(res.data.results)
      })
  }
  
  return (
    <div className='header row'>

        
        
         <Swiper
        spaceBetween={30}
        effect={"fade"}
        
        modules={[EffectFade]}
        className="mySwiper"
      >

        {nowMovies && nowMovies.map(nowmovie=>{
            return <SwiperSlide className='row justify-content-end'>

            <div className='backdrop'>

            </div>
           
          <img src={`https://image.tmdb.org/t/p/original/${nowmovie.backdrop_path}`} alt='ododod' className='col-8' />
        </SwiperSlide>
        })}
        
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg"alt='ododod' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg"alt='ododod' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt='ododod'/>
        </SwiperSlide> */}
      </Swiper>
    </div>
  )
}
