import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLink = ({href, children}) => {
  return (
    <Link to={href} style={{ textDecoration: 'none' }}>
      {children}
    </Link>
  )
}

export default NavbarLink;