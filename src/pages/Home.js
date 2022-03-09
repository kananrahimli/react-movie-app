import React from 'react'
import { useSelector } from 'react-redux'

import Header from '../components/header/header'
import Loading from '../components/Loading.js/Loading'
import TvShows from '../components/tr-tv-shows/trShows'
import TrMovies from '../components/trending-movies/trmovies'

function Home() {
  const loading =useSelector(state=>state.loading)
  
  return (
    <div  className=" ">
        <Header></Header>
    
        <TrMovies></TrMovies>

        <TvShows></TvShows>
    </div>
  )
}

export default Home