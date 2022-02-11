import React from 'react';
import PropTypes from 'prop-types';

function SodaDetails(props) {
  const { soda } = props;
  const sodaBarStyles = {
    width: "3em",
    height: `${1 * soda.amount}em`,
    backgroundColor: `${soda.color}`,
    margin: "0 auto"
  }

  const detailsDivStyle = {
    minHeight: "32em",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    marginBottom: "1em"
  }

  const sodaDivStyles = {
    minWidth: "20em",
  }

  const btnDivStyles = {
    display: "grid",
    gridColumns: "1fr",
    alignSelf: "center",
  }

  const btnStyle = {
    margin: ".5em"
  }

  function handleServeClick() {
    props.onAmountChange(soda.amount - 1)
  }

  function handleRefillClick() {
    props.onAmountChange(20)
  }

  function handleEditClick() {
    props.onEditClick()
  }

  function handleRemoveClick() {
    props.onRemoveClick()
  }

  return (
    <div style={detailsDivStyle}>
      <div style={sodaDivStyles}>
        <div style={sodaBarStyles}></div>
        <h3>{soda.name}</h3>
        <p>brand: {soda.brand}</p>
        <p>flavor: {soda.flavor}</p>
      </div>
      <div style={btnDivStyles}>
        <button style={btnStyle} onClick={handleServeClick}>Serve a Cup</button>
        <button style={btnStyle} onClick={handleRefillClick}>Refill Soda Fountain</button>
        <button style={btnStyle} onClick={handleEditClick}>Edit Soda Information</button>
        <button style={btnStyle} onClick={handleRemoveClick}>Remove Soda</button>
      </div>
    </div>
  )
}

SodaDetails.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  flavor: PropTypes.string,
  amount: PropTypes.number,
  color: PropTypes.string,
  onAmountChange: PropTypes.func,
  onRemoveClick: PropTypes.func
}

export default SodaDetails;