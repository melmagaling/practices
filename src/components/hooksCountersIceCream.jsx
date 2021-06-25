import React, { Component } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../redux'

function HooksCountersIceCream() {
  const numOfIceCream = useSelector(state => state.iceCream.numOfIceCreams)
  const dispatch = useDispatch()
  return (  
    <>
      <h2>Number of Ice Cream - {numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
    </>
  );
}

export default HooksCountersIceCream