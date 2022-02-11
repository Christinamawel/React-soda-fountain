import React from 'react';
import PropTypes from 'prop-types';

function SodaDetails(props) {
  const { soda } = props;
  const sodaBarStyles = {
    width: "3em",
    height: `${1 * soda.amount}em`,
    backgroundColor: `${soda.color}`
  }

  return (
    <React.Fragment>
      <div style={sodaBarStyles}></div>
      <h3>{soda.name}</h3>
      <p>{soda.brand}</p>
      <p>{soda.flavor}</p>
    </React.Fragment>
  )
}

SodaDetails.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  flavor: PropTypes.string,
  amount: PropTypes.number,
  color: PropTypes.string,
}

export default SodaDetails;