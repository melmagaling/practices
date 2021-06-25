import React, { Component } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux'

function HooksCounters() {
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (  
    <>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </>
  );
}

export default HooksCounters