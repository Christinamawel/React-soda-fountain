import React from "react";
import PropTypes from 'prop-types';
import ReusableSodaForm from "./ReusableSodaForm";
import { v4 } from "uuid";

function AddSodaForm(props) {

  function handleAddSodaFormSubmission(event) {
    event.preventDefault();
    props.onNewSodaAdded({
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      flavor: event.target.flavor.value,
      amount: parseInt(event.target.amount.value),
      color: event.target.color.value,
      id: v4()
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