import axios from "axios"

export const getNowMovies=()=>async dispatch=>{
    await axios.get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=dd4d819639705d332d531217b4f7c6b6&page=1&language=en-US&region=US'
    ).then((res)=>{
      
        dispatch({type:'GET_NOW_MOVIES',payload:res.data.results})
    })
}

export const getTopRatedMovies=()=>async dispatch=>{
    await axios.get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=dd4d819639705d332d531217b4f7c6b6&page=1&language=en-US&region=US'
    ).then((res)=>{
      
        dispatch({type:'GET_TOP_RATED',payload:res.data.results})
    })
}

export const getTopRatedTvShows=()=>async dispatch=>{
    await axios.get(
        'https://api.themoviedb.org/3/tv/top_rated?api_key=dd4d819639705d332d531217b4f7c6b6&page=1&language=en-US&region=US'
    ).then((res)=>{
        
        dispatch({type:'GET_TR_TV_SHOWS',payload:res.data.results})
    })
}

export const getAllMovies=()=>async dispatch=>{
    await axios.get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=dd4d819639705d332d531217b4f7c6b6&page=1&language=en-US&region=US'
    ).then((res)=>{
        dispatch({type:'GET_ALL_MOVIES',payload:res.data.results})
    })
}

export const getMovieById=(id)=>async dispatch=>{
    await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=dd4d819639705d332d531217b4f7c6b6&page=1&language=en-US&region=US`
    ).then((res)=>{
        console.log(res.data);
        dispatch({type:'GET_MOVIE_BY_ID',payload:res.data})
    })
}