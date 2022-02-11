import React from "react";
import PropTypes from 'prop-types';
import ReusableSodaForm from "./ReusableSodaForm";

function AddSodaForm(props) {

  function handleAddSodaFormSubmission(event) {
    event.preventDefault();
    props.onNewSodaAdded({
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      flavor: event.target.flavor.value,
      amount: event.target.amount.value,
      color: event.target.color.value,
    })
  };

  return (
    <React.Fragment>
      <ReusableSodaForm
        formSubmissionHandler={handleAddSodaFormSubmission}
        buttonText="Fill Soda Fountain"
      />
    </React.Fragment>
  )
}

AddSodaForm.propTypes = {
  onNewSodaAdded: PropTypes.func
}

export default AddSodaForm;