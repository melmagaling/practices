import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Navbar from './components/navbar'
import Counters from "./components/counters"
import HooksCounters from "./components/hooksCounters"
import HooksCountersIceCream from "./components/hooksCountersIceCream"
import NewCakeContainer from "./components/newCakeContainer"
import ItemContainer from "./components/itemContainer"
import UserContainer from "./components/userContainer"

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4},
      { id: 2, value: 0},
      { id: 3, value: 0},
      { id: 4, value: 0},
      { id: 5, value: 0},
    ]
  };

  constructor() {
    super();
    console.log('App - constructor');
    // this.state = this.props.some
  }

  componentDidMount() {
    console.log('App - Mounted')
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  }

  render() { 
    console.log('App - rendered');
    return ( 
      <>
        <Provider store={store}>
          <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
          <main className="container">
            {/* <Counters
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDelete={this.handleDelete}
              counters={this.state.counters}
            /> */}
            {/* <HooksCounters />
            <HooksCountersIceCream />
            <NewCakeContainer />
            <ItemContainer cake/>
            <ItemContainer /> */}


            <UserContainer />
          </main>
        </Provider>
      </>
    );
  }
}
 
export default App;
