import React from "react";
import PropTypes from 'prop-types';
import ReusableSodaForm from "./ReusableSodaForm";
import ReusableForm from "./ReusableSodaForm";

function AddSodaForm() {

  function handleAddSodaFormSubmission(event) {
    event.preventDefault();
    console.log("");
  };

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleAddSodaFormSubmission}
        buttonText="Fill Soda Fountain"
      />
    </React.Fragment>
  )
}

export default AddSodaForm;