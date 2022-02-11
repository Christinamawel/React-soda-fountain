import React from 'react';
import PropTypes from 'prop-types';

function SodaDetails(props) {
  const { soda } = props;
  const sodaBarStyles = {
    width: "3em",
    height: `${1 * soda.amount}em`,
    backgroundColor: `${soda.color}`
  }

  const detailsDivStyle = {
    minHeight: "30em",
    display: "flex",
    alignItems: "flex-end",
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
      <div>
        <div style={sodaBarStyles}></div>
        <h3>{soda.name}</h3>
        <p>{soda.brand}</p>
        <p>{soda.flavor}</p>
        <button onClick={handleServeClick}>Serve a Cup</button>
        <button onClick={handleRefillClick}>Refill Soda Fountain</button>
        <button onClick={handleEditClick}>Edit Soda Information</button>
        <button onClick={handleRemoveClick}>Remove Soda</button>
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