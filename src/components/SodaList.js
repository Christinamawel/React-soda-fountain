import React from 'react';
import Soda from './Soda';
import PropTypes from 'prop-types';
import sodaFountainImage from '../img/soda-fountain.png';

function SodaList(props) {

  const sodaListStyles = {
    display: "flex",
    columnGap: "2em",
    alignItems: "flex-end",
    minHeight: "33em",
    justifyContent: "center",
    marginBottom: "1em"
  }

  const sodaFountainDivStyles = {
    position: "absolute",
    display: "flex",
    columnGap: "2em",
    alignItems: "flex-end",
    minHeight: "30em",
    justifyContent: "center",
    marginBottom: "1em",
    width: "100%",
  }

  const sodaFountainsStyle = {
    height: "32em",
    width: "12em"
  }

  return (
    <React.Fragment>
      <div style={sodaFountainDivStyles}>
        {props.currentSodaList.map((soda) => (
          <img style={sodaFountainsStyle} src={sodaFountainImage} />
        ))}
      </div>
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
    </React.Fragment>
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