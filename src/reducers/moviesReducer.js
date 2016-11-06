export default function movieReducer(state = {}, action ) {
  switch(action.type){
    case 'ALL_MOVIES':
    return Object.assign({}, state, {
      allMovies: action.payload
    })
    case 'MOVIE':
    return Object.assign({}, state, {
      movie: action.payload
    })
    case 'SEARCH_MOVIES':
    return Object.assign({}, state, {
      searchMovies: action.payload
    })
    default:
    return state
  }
}
