import React from 'react';
import PropTypes from 'prop-types';

function Soda(props) {
  const sodaBarStyles = {
    width: "3em",
    height: `${1 * props.amount}em`,
    backgroundColor: `${props.color}`
  }

  function handleClick() {
    props.onChangingDetailView(props.id)
  }

  return (
    <div onClick={handleClick}>
      <div id="soda-bar" style={sodaBarStyles}></div>
      <h3>{props.name}</h3>
      <p>{props.brand}</p>
      <p>{props.flavor}</p>
    </div>
  )
}

Soda.propTypes = {
  onChangingDetailView: PropTypes.func,
  name: PropTypes.string,
  brand: PropTypes.string,
  flavor: PropTypes.string,
  amount: PropTypes.number,
  color: PropTypes.string,
  id: PropTypes.number
}

export default Soda;