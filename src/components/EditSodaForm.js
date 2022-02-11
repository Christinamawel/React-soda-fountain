import React from "react";
import ReusableSodaForm from "./ReusableSodaForm";
import PropTypes from "prop-types";

function EditSodaForm(props) {
  const { soda } = props;

  function handleEditProductFormSubmission(event) {
    event.preventDefault();
    props.onSodaEdit({
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      flavor: event.target.flavor.value,
      amount: parseInt(event.target.amount.value),
      color: event.target.color.value,
      id: soda.id
    })
  }

  return (
    <React.Fragment>
      <ReusableSodaForm
        formSubmissionHandler={handleEditProductFormSubmission}
        buttonText="Update Soda Information"
      />
    </React.Fragment>
  );
}

EditSodaForm.propTypes = {
  soda: PropTypes.object,
  onSodaEdit: PropTypes.func,
};

export default EditSodaForm;