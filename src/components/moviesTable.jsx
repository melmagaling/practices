import React, { Component } from 'react';
import auth from '../services/authService';
import Like from './common/like';
import Table from './common/Table';
import { Link } from 'react-router-dom';


class Moviestable extends Component {

  columns = [
    { path: "title", label: "Title", content: movie => (<Link to={`/movies/${movie._id}`}>{movie.title}</Link>) },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { 
      key: "Like", 
      content: movie => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      )
    }
  ];

  delectColumn = { 
    key: "Delete",
    content: movie => (
      auth.getCurrentUser() &&
      <button 
        className="btn btn-danger" 
        onClick={() => this.props.onDelete(movie._id)}
      >
        Delete
      </button>
    )
  }

  constructor() {
    super();
    const user = auth.getCurrentUser();
    if (user && user.isAdmin) this.columns.push(this.delectColumn);
 }

  render() { 
    const { movies, sortColumn, onSort } = this.props;

    return (  
      <Table 
        columns={this.columns} 
        data={movies} 
        sortColumn={sortColumn} 
        onSort={onSort} 
      />
    );
  }
}
 
export default Moviestable;