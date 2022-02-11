import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {

  const formDivStyle = {
    fontSize: "1.3rem",
    margin: ".2em"
  }

  const btnStyle = {
    margin: ".5em"
  }

  return (
    <form onSubmit={props.formSubmissionHandler}>
      <div style={formDivStyle}>
        <label htmlFor="name">Soda Name </label>
        <input type="text" name="name" placeholder="Name" />
      </div>
      <div style={formDivStyle}>
        <label htmlFor="brand">Soda Brand </label>
        <input type="text" name="brand" placeholder="Brand" />
      </div>
      <div style={formDivStyle}>
        <label htmlFor="flavor">Soda Flavor </label>
        <input type="text" name="flavor" placeholder="flavor" />
      </div>
      <div style={formDivStyle}>
        <label htmlFor="amount">Amount of Soda (full is 20) </label>
        <input type="number" name="amount" min="0" max="20"/>
      </div>
      <div style={formDivStyle}>
        <label htmlFor="color">Soda Color </label>
        <input type="color" name="color"/>
      </div>
      <button style={btnStyle} type="submit">{props.buttonText}</button>
    </form>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;