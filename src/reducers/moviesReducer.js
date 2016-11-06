export default function movieReducer(state = {}, action ) {
  switch(action.type){
    case 'ALL_MOVIES':
    return Object.assign({}, state, {
      allMovies: action.payload
    })
    case 'MOVIE':
    return Object.assign({}, state, {
      movie: action.payload[0]
    })
    case 'REPLACE_WARNING':
    return Object.assign({}, state, {
      movie: state.movie.warning.filter(warn => warn._id === action.payload._id ? action.payload.id : warn)
    })
    case 'SEARCH_MOVIES':
    return Object.assign({}, state, {
      searchMovies: action.payload
    })
    default:
    return state
  }
}
