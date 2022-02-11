import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <form onSubmit={props.formSubmissionHandler}>
      <div>
        <label htmlFor="name">Soda Name </label>
        <input type="text" name="name" placeholder="Name" />
      </div>
      <div>
        <label htmlFor="brand">Soda Brand </label>
        <input type="text" name="brand" placeholder="Brand" />
      </div>
      <div>
        <label htmlFor="flavor">Soda Flavor </label>
        <input type="text" name="flavor" placeholder="flavor" />
      </div>
      <div>
        <label htmlFor="amount">Amount of Soda (full is 20) </label>
        <input type="number" name="amount" min="0" max="20"/>
      </div>
      <div>
        <label htmlFor="color">Soda Color </label>
        <input type="color" name="color"/>
      </div>
      <button type="submit">{props.buttonText}</button>
    </form>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;