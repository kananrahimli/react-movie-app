const INITIAL_STATE={
    nowMovies:[]
}

export  const reducer=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case 'GET_NOW_MOVIES':
         return {...state,nowMovies:action.payload}
    }
    return state
}