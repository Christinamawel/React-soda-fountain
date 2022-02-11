import React from 'react';
import SodaList from './SodaList';
import AddSodaForm from './AddSodaForm';

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
      // 1 = SodaList view,
      // 2 = SodaDetail view,
      // 3 = AddSodaForm view
    };
  }

  handleClick = () => {
    if (this.state.pageShowing === 1) {
      this.setState(() => ({
        pageShowing: 3
      }));
    } else {
      this.setState(() => ({
        pageShowing: 1
      }))
    }
  }

  render () {
    const mainSodaList = this.state.mainSodaList;
    let currentPage = null;
    let buttonText = null;

    if(this.state.pageShowing === 1) {
      currentPage = <SodaList currentSodaList={mainSodaList} />
      buttonText = "Add soda"
    } else if (this.state.pageShowing === 3) {
      currentPage = <AddSodaForm />
      buttonText = "Back to soda fountains"
    }

    return(
      <React.Fragment>
        {currentPage}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default SodaController;