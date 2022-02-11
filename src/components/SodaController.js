import React from 'react';

class SodaController extends React.Component {
  constructor() {
    super();
    this.state = {
      mainSodaList: [],
      pageShowing: 1
    };
  }

  render () {

    return(
      <React.Fragment>
        <h1>mainSodaList</h1>
      </React.Fragment>
    )
  }
}

export default SodaController;