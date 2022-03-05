import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/layout/navigation";
import OverView from "./components/movie-sections/OverView";
import Photos from "./components/movie-sections/Photos";
import Videos from "./components/Videos";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Movies from "./pages/Movies";
import TvShow from "./pages/TvShow";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation></Navigation>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/movie/:id" element={<Movie />}>
            <Route exact path="" element={<OverView></OverView>} />
            <Route exact strict path="overview" element={<OverView></OverView>} />
            <Route exact strict path="videos" element={<Videos></Videos>} />
            <Route exact strict path="photos" element={<Photos></Photos>} />
          </Route>
          <Route exact path="/tv-show/:id" element={<TvShow />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
