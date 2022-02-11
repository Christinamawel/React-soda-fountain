import React from 'react';
import SodaList from './SodaList';
import AddSodaForm from './AddSodaForm';
import SodaDetails from './SodaDetails';

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
        color: "#333029",
        id: 1
      },
      {
        name: "Sprit",
        brand: "Coca-Cola",
        flavor: "Lemon-Lime",
        amount: "8",
        color: "#a3f5a3",
        id: 2
      },
      {
        name: "A&W",
        brand: "A&W",
        flavor: "Root Beer",
        amount: "20",
        color: "#4f4331",
        id: 3
      },
      {
        name: "Fanta Orange",
        brand: "Fanta",
        flavor: "Orange",
        amount: "13",
        color: "#e69a29",
        id: 4
      }
    ],
      currentSodaInDetails: null,
      pageShowing: 1
      // 1 = SodaList view,
      // 2 = SodaDetail view,
      // 3 = AddSodaForm view
    };
  }

  handleAddingNewSoda = (newSoda) => {
    const newMainSodaList = this.state.mainSodaList.concat(newSoda);
    this.setState({
      mainSodaList: newMainSodaList,
      pageShowing: 1
    })
  }

  handleChangingDetailView = (id) => {
    const currentSoda = this.state.mainSodaList.filter(
      (soda) => soda.id === id
    )[0];
    this.setState({
      currentSodaInDetails: currentSoda,
      pageShowing: 2
    })
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
    const currentSodaInDetails = this.state.currentSodaInDetails;
    let currentPage = null;
    let buttonText = null;

    if(this.state.pageShowing === 1) {
      currentPage = <SodaList currentSodaList={mainSodaList} onChangingDetailView={this.handleChangingDetailView}/>
      buttonText = "Add soda"
    } else if(this.state.pageShowing === 2){
      currentPage = <SodaDetails soda={currentSodaInDetails} />
      buttonText = "Back to soda fountains"
    } else {
      currentPage = <AddSodaForm onNewSodaAdded={this.handleAddingNewSoda}/>
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