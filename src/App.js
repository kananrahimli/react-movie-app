import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/layout/navigation";
import OverView from "./components/movie-sections/OverView";
import Videos from "./components/Videos";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Movies from "./pages/Movies";
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
            <Route exact path="overview" element={<OverView></OverView>} />
            <Route exact path="videos" element={<Videos></Videos>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
