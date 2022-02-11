import React from 'react';
import Soda from './Soda';

function SodaList(props) {
  const sodaListStyles = {
    display: "flex",
    columnGap: "2em",
    alignItems: "flex-end"
  }

  return (
    <div id="soda-list" style={sodaListStyles}>
      {props.sodaList.map((soda) => (
        <Soda
          name={soda.name}
          brand={soda.brand}
          flavor={soda.flavor}
          amount={soda.amount}
          color={soda.color}
        />
      ))}
    </div>
  )
}

export default SodaList;