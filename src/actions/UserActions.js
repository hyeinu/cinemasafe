import axios from 'axios';
import RouteActions from './RouteActions'

export function allMovies(movies){
  return {
    type: 'ALL_MOVIES',
    payload: movies
  }
}
export function oneMovie(movie){
  return {
    type: 'MOVIE',
    payload: movie
  }
}

export function replaceWarning(warning){
  return {
  type: 'REPLACE_WARNING',
  payload: warning
  }
}

export function movieList(movies){
  return {
    type: 'SEARCH_MOVIES',
    payload: movies.Search
  }
}

// This is the API call to the backend to get all movies
// This is from our backend database
// The response will update the store and the information
// Is avaliable to the components

export function getAll(){
  return (dispatch) => {
    axios.get('/api/movies')
      .then(res => dispatch(allMovies(res.data)))
      .catch()
  }
}

export function searchMovies(query){
  return (dispatch) => {
    axios.get(`http://www.omdbapi.com/?${query}plot=short&r=json`)
      .then(res => dispatch(movieList(res.data)))
      .catch()
  }
}

export function getMovie(imdbID, poster){
  return(dispatch) => {
    axios.get(`http://www.omdbapi.com/?i=${imdbID}&plot=short&r=json`)
      .then(res => {
        console.log('res.data:', res.data)
        let { Title, Plot, Rated, Released } = res.data;
        let newMovie = {
          title: Title,
          rated: Rated,
          plot: Plot,
          released: Released,
          poster,
          imdbID
        }
        return newMovie;
      })
      .then(newMovie => {
        axios.put(`/api/movies/${imdbID}`, newMovie)
          .then(res => {
            RouteActions.route(`/${imdbID}`)
            dispatch(oneMovie(res.data))
          })
          .catch()
      })
      .catch()
  }
}

export function addCount(id){
  return (dispatch) => {
    axios.put(`/api/warnings/addCount/${id}`)
      .then(res => dispatch(replaceWarning(res.data)))
      .catch()
  }
}

export function minusCount(id){
  return (dispatch) => {
    axios.put(`/api/warnings/minusCount/${id}`)
      .then(res => dispatch(replaceWarning(res.data)))
      .catch()
  }
}
