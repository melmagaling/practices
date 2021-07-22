import React from 'react';
import Joi from 'joi-browser' 
import Form from './common/form';
import { getGenres } from '../services/genreService';
import { saveMovie, getMovie } from '../services/movieService';

class MovieForm extends Form {
  state = {
    data: { title: "", genreId: "", numberInStock: "", dailyRentalRate: "" },
    genres: [],
    errors: {}
  };

  async populateGenres() {
    const { data: genres } = await getGenres();
    this.setState({ genres });
  }

  async populateMovies() {
    try {
      const movieId = this.props.match.params.id;
      if (movieId === 'new') return;
      const {data: movie } = await getMovie(movieId);
      this.setState({ data: this.mapToViewModel(movie) })
    } catch (error) {
      if (error.response && error.response.status === 404) 
        this.props.history.replace('/not-found');
    }
  }

  async componentDidMount() {
    await this.populateGenres();
    await this.populateMovies();
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    };
  }

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label('Title'),
    genreId: Joi.string().required().label('Genre'),
    numberInStock: Joi.number().min(0).max(10).label('Number in Stock'),
    dailyRentalRate: Joi.number().min(0).max(10).label('Rate')
  };

  doSubmit = async () => {
    await saveMovie(this.state.data);
    this.props.history.push('/movies');
  }

  render() { 
    const { genres } = this.state;
    return (  
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", genres)}
          {this.renderInput("numberInStock", "Number in Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    )
  }
}
 
export default MovieForm;