import React from 'react'

function Soda(props) {
  const sodaBarStyles = {
    width: "3em",
    height: `${1 * props.amount}em`,
    backgroundColor: `${props.color}`
  }

  return (
    <div>
      <div id="soda-bar" style={sodaBarStyles}></div>
      <h3>{props.name}</h3>
      <p>{props.brand}</p>
      <p>{props.flavor}</p>
    </div>
  )
}

export default Soda;