import { fontFamily } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLink = ({href, children}) => {
  return (
    <Link to={href} style={{
      textDecoration: 'none',
      fontSize: '16px',
      color: '#757575',
      fontWeight: 'bold',
      fontFamily: '"Cormorant Garamond", serif'
      }}>
      {children}
    </Link>
  )
}

export default NavbarLink;