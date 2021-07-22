import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import auth from './services/authService';
import Rentals from './components/rentals';
import Customers from './components/customers';
import Movies from './components/movies';
import Navbar from './components/navBar';
import NotFound from './components/notFound';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import Logout from './components/logout';
import ProtectedRoute from './components/common/protectedRoute';
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';



class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({user});
  }

  render() { 
    const { user } = this.state;
    return ( 
      <main className="container">
        <ToastContainer />
        <Navbar user={user} />
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <ProtectedRoute 
            path="/movies/:id" 
            component={MovieForm}
          />
          <Route path="/movies" 
            render={props => <Movies {...props} user={user} />}
          />
          <ProtectedRoute path="/customers" component={Customers} />
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
