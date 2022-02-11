import React from 'react';
import Soda from './Soda';
import PropTypes from 'prop-types';

function SodaList(props) {

  const sodaListStyles = {
    display: "flex",
    columnGap: "2em",
    alignItems: "flex-end",
    minHeight: "30em",
    justifyContent: "center",
    marginBottom: "1em"
  }

  return (
      <div id="soda-list" style={sodaListStyles}>
          {props.currentSodaList.map((soda) => (
            <Soda
              onChangingDetailView={props.onChangingDetailView}
              name={soda.name}
              brand={soda.brand}
              flavor={soda.flavor}
              amount={soda.amount}
              color={soda.color}
              id={soda.id}
              key={soda.id}
            />
          ))}
    </div>
  )
}

SodaList.propTypes = {
  onChangingDetailView: PropTypes.func,
  name: PropTypes.string,
  brand: PropTypes.string,
  flavor: PropTypes.string,
  amount: PropTypes.number,
  color: PropTypes.string,
  id: PropTypes.number
}

export default SodaList;