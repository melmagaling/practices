import React, { Component } from 'react';

const Navbar = ({  totalCounters }) => {
  console.log('App - Navbar');
  return ( 
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
        </a>
      </div>
    </nav>
  ); 
};
 
export default Navbar;