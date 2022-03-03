import React from 'react'

import Header from '../components/header/header'
import TvShows from '../components/tr-tv-shows/trShows'
import TrMovies from '../components/trending-movies/trmovies'
function Home() {
  return (
    <div>
        <Header></Header>

        <TrMovies></TrMovies>

        <TvShows></TvShows>
    </div>
  )
}

export default Home