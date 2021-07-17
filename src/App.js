import React, { Component } from 'react'
import { Route, Switch, Link, Redirect} from 'react-router-dom'
import Rentals from './components/rentals';
import Customers from './components/customers';
import Movies from './components/movies'
import Navbar from './components/navbar';
import NotFound from './components/notFound';
import MovieDetails from './components/movieDetails';

class App extends Component {
  render() { 
    return ( 
      <main className="container">
        <Navbar />
        <Switch>
          <Route path="/movies/:id"  component={MovieDetails} />
          <Route path="/movies" exact component={Movies}/>
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound}/>
          <Redirect from="/" exact to="movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    );
  }
}
 
export default App;
