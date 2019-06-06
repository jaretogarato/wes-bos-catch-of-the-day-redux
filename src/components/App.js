import React, { Component } from 'react';

import StorePicker from './StorePicker';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" age={100} cool={true} />
        </div>
        <Inventory />
        <Order />
      </div>
    )
  }
}

export default App;
