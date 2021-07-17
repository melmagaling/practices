import React from 'react';

const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h1>Movie {match.params.id}</h1>
      <button onClick={() => history.push('/movies')}>Save</button>
    </div>
  );
}
export default MovieForm;
 