import React, { Component } from 'react'
import Counter from "./counter"
import { connect } from 'react-redux'
import { buyCake } from '../redux'

class Counters extends Component {
 
  render() {
    const {onReset, onIncrement, onDelete} = this.props;
    console.log('App -Counters');
    return (  
      <>
        <button 
          onClick={onReset} 
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => 
          <Counter 
            key={counter.id} 
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        )}

        <h2>Number of cakes - {this.props.numOfCkaes}</h2>
        <button onClick={this.props.buyCake}>Buy Cake</button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    numOfCkaes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}
 
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Counters)