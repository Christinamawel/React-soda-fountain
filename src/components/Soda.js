import React from 'react';
import PropTypes from 'prop-types';

function Soda(props) {
  const sodaBarStyles = {
    width: "10em",
    height: `${1 * props.amount}em`,
    backgroundColor: `${props.color}`,
    margin: "0 auto"
  }

  const divStyle = {
    width: "12em"
  }

  const pushDown = {
    marginTop: "11em" 
  }

  function handleClick() {
    props.onChangingDetailView(props.id)
  }

  return (
    <React.Fragment>
    <div id="sodaComponentDiv" style={divStyle} onClick={handleClick}>
      <div id="soda-bar" style={sodaBarStyles}></div>
      <h3 style={pushDown}>{props.name}</h3>
      <p>brand: {props.brand}</p>
      <p>flavor: {props.flavor}</p>
    </div>
    </React.Fragment>
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