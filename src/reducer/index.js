const INITIAL_STATE = {
  nowMovies: [],
  trendingMovies: [],
  trendingTvShows: [],
  allMovies: [],
  movieItem: null,
  tvShowItem:[],
  movieVideos: [],
  movieImages: [],
  movieCasts: [],
  loading: true,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_NOW_MOVIES":
      return { ...state, nowMovies: action.payload, loading: false };
    case "GET_TOP_RATED":
      return { ...state, trendingMovies: action.payload, loading: false };
    case "GET_TR_TV_SHOWS":
      return { ...state, trendingTvShows: action.payload, loading: false };
    case "GET_ALL_MOVIES":
      return { ...state, allMovies: action.payload, loading: false };
    case "GET_MOVIE_BY_ID":
      return { ...state, movieItem: action.payload };
    case "GET_TV_BY_ID":
      return { ...state, tvShowItem: action.payload };
    case "SEARCH_MOVIE":
      return { ...state, allMovies: action.payload, loading: false };
    case "GET_MOVIE_VIDEOS":
      return { ...state, movieVideos: action.payload };
    case "GET_MOVIE_IMAGES":
      return { ...state, movieImages: action.payload };
    case "GET_MOVIE_CASTS":
      return { ...state, movieCasts: action.payload };
    case "SHOW_LOADING":
      return { ...state, loading: action.payload };
  }

  return state;
};
