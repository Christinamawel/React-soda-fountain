import React from 'react';
import SodaList from './SodaList';
import AddSodaForm from './AddSodaForm';
import SodaDetails from './SodaDetails';
import EditSodaForm from './EditSodaForm';
import RemoveSoda from './RemoveSoda';

class SodaController extends React.Component {
  constructor() {
    super();
    this.state = {
      mainSodaList: [],
      currentSodaInDetails: null,
      pageShowing: 1
      // 1 = SodaList view,
      // 2 = SodaDetail view,
      // 3 = AddSodaForm view,
      // 4 = EditSodaForm view,
      // 5 = RemoveSoda view
    };
  }

  // -------Sent to AddSodaForm---------

  handleAddingNewSoda = (newSoda) => {
    const newMainSodaList = this.state.mainSodaList.concat(newSoda);
    this.setState({
      mainSodaList: newMainSodaList,
      pageShowing: 1
    })
  }

  // -------Sent to SodaList---------

  handleChangingDetailView = (id) => {
    const currentSoda = this.state.mainSodaList
    .filter((soda) => soda.id === id)[0];
    this.setState({
      currentSodaInDetails: currentSoda,
      pageShowing: 2
    })
  }

  // -------Sent to SodaDetails---------

  handleSodaAmountChange = (amount) => {
    const currentSoda = this.state.mainSodaList
    .filter((soda) => soda.id === this.state.currentSodaInDetails.id)[0];
    currentSoda.amount = amount
    const editedSodaList = this.state.mainSodaList
    .filter((soda) => soda.id !== this.state.currentSodaInDetails.id)
    .concat(currentSoda)
    this.setState({
      mainSodaList: editedSodaList,
      pageShowing: 2
    })
  }

  handleEditSodaClick = () => {
    this.setState({
      pageShowing: 4
    })
  }

  handleRemoveSodaClick = () => {
    this.setState({
      pageShowing: 5
    })
  }

  // -------Sent to EditSodaForm---------
  handleEditSoda = (editedSoda) => {
    const newSodaList = this.state.mainSodaList
    .filter((soda) => soda.id !== editedSoda.id)
    .concat(editedSoda)
    this.setState({
      mainSodaList: newSodaList,
      currentSodaInDetails: editedSoda,
      pageShowing: 2
    })
  }

  // -------Sent to RemoveSoda---------
  handleRemoveSoda = (sodaToDelete) => {
    const newSodaList = this.state.mainSodaList
    .filter((soda) => soda.id !== sodaToDelete.id)
    this.setState({
      mainSodaList: newSodaList,
      currentSodaInDetails: null,
      pageShowing: 1
    })
  }

  // -------Used Here---------

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
      currentPage = <SodaList 
      currentSodaList={mainSodaList} 
      onChangingDetailView={this.handleChangingDetailView}/>
      buttonText = "Add a new soda"
    } else if(this.state.pageShowing === 2){
      currentPage = <SodaDetails 
      soda={currentSodaInDetails} 
      onAmountChange={this.handleSodaAmountChange} 
      onEditClick={this.handleEditSodaClick}
      onRemoveClick={this.handleRemoveSodaClick}/>
      buttonText = "Back to soda fountains"
    } else if(this.state.pageShowing === 3) {
      currentPage = <AddSodaForm 
      onNewSodaAdded={this.handleAddingNewSoda}/>
      buttonText = "Back to soda fountains"
    } else if(this.state.pageShowing === 4) {
      currentPage = <EditSodaForm 
      soda={currentSodaInDetails} 
      onSodaEdit={this.handleEditSoda}/>
      buttonText = "Back to soda fountains"
    } else {
      currentPage = <RemoveSoda 
      soda={currentSodaInDetails} 
      onSodaRemove={this.handleRemoveSoda}/>
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