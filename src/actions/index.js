import axios from "axios"

export const getNowMovies=()=>async dispatch=>{
    await axios.get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=dd4d819639705d332d531217b4f7c6b6&page=1&language=en-US&region=US'
    ).then((res)=>{
        console.log(res.data);
        dispatch({type:'GET_NOW_MOVIES',payload:res.data.results})
    })
}