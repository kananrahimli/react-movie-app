const INITIAL_STATE = {
  nowMovies: [],
  trendingMovies: [],
  trendingTvShows: [],
  allMovies:[],
  movieItem:null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_NOW_MOVIES":
      return { ...state, nowMovies: action.payload };
    case "GET_TOP_RATED":
      return { ...state, trendingMovies: action.payload };
    case "GET_TR_TV_SHOWS":
      return { ...state, trendingTvShows: action.payload };
    case "GET_ALL_MOVIES":
      return {...state, allMovies:action.payload }
      case "GET_MOVIE_BY_ID":
      return {...state, movieItem:action.payload }
  }
  
  return state;
};
