import React from "react";
// import PropTypes from 'prop-types';
import ReusableSodaForm from "./ReusableSodaForm";

function AddSodaForm() {

  function handleAddSodaFormSubmission(event) {
    event.preventDefault();
    console.log("");
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

// AddSodaForm.propTypes = {

// }

export default AddSodaForm;