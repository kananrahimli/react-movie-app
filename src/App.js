import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/layout/navigation";
import OverView from "./components/movie-sections/OverView";
import Photos from "./components/movie-sections/Photos";
import Videos from "./components/Videos";
import OverviewTv from "./components/tv-shows-sections/OverviewTv";
import PhotosTv from "./components/tv-shows-sections/PhotosTv";
import VideosTv from "./components/tv-shows-sections/VideosTv";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Movies from "./pages/Movies";
import TvShow from "./pages/TvShow";
import TvShows from "./pages/TvShows";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation></Navigation>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/movies" element={<Movies />} />

          <Route exact path="/movie/:id" element={<Movie />}>
            <Route exact path="" element={<OverView></OverView>} />
            <Route exact path="overview" element={<OverView></OverView>} />
            <Route exact path="videos" element={<Videos></Videos>} />
            <Route exact path="photos" element={<Photos></Photos>} />
          </Route>
          <Route exact path="/tv-shows" element={<TvShows />} />
          <Route exact path="/tv-show/:id" element={<TvShow/>}>
            <Route  exact path="" element={<OverviewTv/>}/>
            <Route  exact path="overview-tv" element={<OverviewTv></OverviewTv>}/>
            <Route  exact path="videos-tv" element={<VideosTv></VideosTv>}/>
            <Route  exact path="photos-tv" element={<PhotosTv></PhotosTv>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
