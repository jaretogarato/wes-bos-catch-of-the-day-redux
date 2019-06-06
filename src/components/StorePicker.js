import React, { Component } from 'react';

class StorePicker extends Component{
  render() {
    // return <p>I am the store picker</p>
    return (
      <React.Fragment>
        <form className='store-selector'>
          <h2>Please Enter A Store</h2>
          <input type='text' required placeholder="Store Name" />
          <button type="submit">Visit Store</button>
        </form>
      </React.Fragment>

    )
  }
}

export default StorePicker;
