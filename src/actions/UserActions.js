import axios from 'axios';

export function allMovies(movies){
  return {
    type: 'ALL_MOVIES',
    payload: movies
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
