import axios from "axios";

export const getNowMovies = () => async (dispatch) => {
  await dispatch({ type: "SHOW_LOADING", payload: true });
  await axios
    .get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=dd4d819639705d332d531217b4f7c6b6&page=1&language=en-US&region=US"
    )
    .then((res) => {
      setTimeout(() => {
        dispatch({ type: "GET_NOW_MOVIES", payload: res.data.results });
      }, 3000);
    });
};

export const getTopRatedMovies = () => async (dispatch) => {
  await dispatch({ type: "SHOW_LOADING", payload: true });
  await axios
    .get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=dd4d819639705d332d531217b4f7c6b6&page=1&language=en-US&region=US"
    )
    .then((res) => {
      setTimeout(() => {
        dispatch({ type: "GET_TOP_RATED", payload: res.data.results });
      }, 3000);
    });
};

export const getTopRatedTvShows = () => async (dispatch) => {
  await dispatch({ type: "SHOW_LOADING", payload: true });
  await axios
    .get(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=dd4d819639705d332d531217b4f7c6b6&page=1&language=en-US&region=US"
    )
    .then((res) => {
      setTimeout(() => {
        dispatch({ type: "GET_TR_TV_SHOWS", payload: res.data.results });
      }, 3000);
    });
};

export const getAllMovies = (page) => async (dispatch) => {
  await dispatch({ type: "SHOW_LOADING", payload: true });
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=dd4d819639705d332d531217b4f7c6b6&page=${page}&language=en-US&region=US`
    )
    .then((res) => {
      setTimeout(() => {
        dispatch({ type: "GET_ALL_MOVIES", payload: res.data.results });
      }, 5000);
    });
};

export const getMovieById = (id) => async (dispatch) => {
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=dd4d819639705d332d531217b4f7c6b6&page=1&language=en-US&region=US`
    )
    .then((res) => {
      dispatch({ type: "GET_MOVIE_BY_ID", payload: res.data });
    });
};

export const getTvShowByID = (id) => async (dispatch) => {
  await axios
    .get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=dd4d819639705d332d531217b4f7c6b6&page=1&language=en-US&region=US`
    )
    .then((res) => {
      console.log(res.data);
      dispatch({ type: "GET_TV_BY_ID", payload: res.data });
    });
};

export const getSearchMovie = (searched) => async (dispatch) => {
    await dispatch({ type: "SHOW_LOADING", payload: true });
  await axios
    .get(
      `https://api.themoviedb.org/3/search/movie/?api_key=dd4d819639705d332d531217b4f7c6b6&query=${searched}`
    )
    .then((res) => {
      dispatch({ type: "SEARCH_MOVIE", payload: res.data.results });
    });
};

export const getMovieVideos = (id) => async (dispatch) => {
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=dd4d819639705d332d531217b4f7c6b6`
    )
    .then((res) => {
      dispatch({ type: "GET_MOVIE_VIDEOS", payload: res.data.results });
    });
};

export const getMoviePhotos = (id) => async (dispatch) => {
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=dd4d819639705d332d531217b4f7c6b6`
    )
    .then((res) => {
     
      dispatch({ type: "GET_MOVIE_IMAGES", payload: res.data.backdrops });
    });
};

export const getPersonCast = (id) => async (dispatch) => {
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=dd4d819639705d332d531217b4f7c6b6`
    )
    .then((res) => {
    //  console.log(res);
      dispatch({ type: "GET_MOVIE_CASTS", payload: res.data.cast });
    });
};

