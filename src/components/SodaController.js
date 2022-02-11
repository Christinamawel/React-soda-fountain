import React from 'react';
import SodaList from './SodaList';

class SodaController extends React.Component {
  constructor() {
    super();
    this.state = {
      mainSodaList: [
      {
        name: "Coke",
        brand: "Coca-Cola",
        flavor: "Cola",
        amount: "15",
        color: "#333029"
      },
      {
        name: "Sprit",
        brand: "Coca-Cola",
        flavor: "Lemon-Lime",
        amount: "8",
        color: "#a3f5a3"
      },
      {
        name: "A&W",
        brand: "A&W",
        flavor: "Root Beer",
        amount: "20",
        color: "#4f4331"
      },
      {
        name: "Fanta Orange",
        brand: "Fanta",
        flavor: "Orange",
        amount: "13",
        color: "#e69a29"
      }
    ],
      pageShowing: 1
    };
  }

  render () {
    const mainSodaList = this.state.mainSodaList;

    return(
      <React.Fragment>
        <SodaList sodaList={mainSodaList}/>
      </React.Fragment>
    )
  }
}

export default SodaController;