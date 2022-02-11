import React from 'react';

function Header() {
  const styles = {
    fontSize: "3rem",
    color: "rgb(19, 19, 189)"
  }

  return (
    <React.Fragment>
      <h1 style={styles}>Suzy's Soda Shop</h1>
    </React.Fragment>
  )
}

export default Header;