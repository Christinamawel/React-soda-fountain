import React from 'react';

function Header() {
  const styles = {
    fontSize: "4rem",
    display: "flowRoot",
    marginTop: "0",
    paddingTop: ".5em"
  }

  return (
    <React.Fragment>
      <h1 style={styles}>Suzy's Soda Shop</h1>
    </React.Fragment>
  )
}

export default Header;