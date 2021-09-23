import React, { Component } from 'react';
import { getMovies, deleteMovie } from '../services/movieService';
import { getGenres } from '../services/genreService';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import MoviesTable from './moviesTable';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import SearchBox from './common/searchBox';
import { toast } from "react-toastify";

class Movies extends Component {
  state = {  
    movies: [],
    genres: [],
    pageSize: 2,
    currentPage: 1,
    selectedGenre: null,
    sortColumn: { path: 'title', order:'asc' },
    searchQuery: ""
  }

  async componentDidMount() {
    const { data } = await getGenres();
    const genres = [{ _id: '', name: "All Genres"}, ...data];
    const { data: movies } = await getMovies();
    this.setState({ movies, genres })
  }

   handleDelete = async (movieId) => {
    const originalMovies = this.state.movies;
    const movies = originalMovies.filter(m => m._id !== movieId);
    this.setState({ movies });
    try {
      await deleteMovie(movieId);
    } catch (error) {
      if (error.response && error.response.status === 404)
        toast.error('This movie has already been deleted.')
      
      this.setState({ movies: originalMovies });
    }
  }

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  }

  handlePageChange = page => {
    this.setState({ currentPage : page })
  }

  handleSort = sortColumn => { 
    this.setState({ sortColumn })
  }

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  }

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedGenre:"", currentPage: 1 });
  }

  getPageData = () => {
    const { pageSize, currentPage, selectedGenre, sortColumn, searchQuery, movies : allMovies } = this.state;

    let filtered = allMovies;
    if (searchQuery) {
      console.log('searchQuery', searchQuery)
      filtered = allMovies.filter(
        m => m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }
    else{
      filtered = selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id) 
        : allMovies;
    }
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);

    return {totalCount: filtered.length, data: movies};
  }

  render() {
    const { length: count } = this.state.movies;
    const { genres, pageSize, currentPage, selectedGenre, sortColumn, searchQuery} = this.state;
    const { user } = this.props;

    const {totalCount, data: movies} = this.getPageData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup 
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect} 
          />
        </div>
        <div className="col">
          { user && (
            <Link 
              to="/movies/new"
              className="btn btn-primary mb-2">
                New Movie
            </Link>
            )
          }
          <p>Showing {totalCount} movies in the database.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch}/>
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination 
            itemsCount={totalCount} 
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    )
  }
}
 
export default Movies;