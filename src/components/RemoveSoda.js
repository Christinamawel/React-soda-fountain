import React from 'react';
import PropTypes from 'prop-types';

function RemoveSoda(props) {

  function handleSodaDelete() {
    props.onSodaRemove(props.soda)
  }

  const btnStyle = {
    display: "block",
    margin: ".5em auto"
  }

  return (
    <React.Fragment>
      <h2>Are you sure you want to remove this soda from this Fountain?</h2>
      <button style={btnStyle} onClick={handleSodaDelete}>Remove Soda</button>
    </React.Fragment>
  )
}

RemoveSoda.propTypes = {
  soda: PropTypes.object,
  onSodaRemove: PropTypes.func,
};

export default RemoveSoda;