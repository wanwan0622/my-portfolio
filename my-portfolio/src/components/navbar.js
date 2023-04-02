import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css'
import { Menu, MenuItem } from '@mui/material';

const Article = () => {
  return (
    <div>
      <BrowserRouter>
      <Menu>
        <MenuItem>feature</MenuItem>
        <MenuItem>works - programming</MenuItem>
      </Menu>
      </BrowserRouter>
      {/* <BrowserRouter>
        <ul>
          <li>
            <Link to='/'>feature</Link>
          </li>
          <li>
            <Link to='/'>works - programming</Link>
          </li>
          <li>
            <Link to='/'>works - design</Link>
          </li>
          <li>
            <Link to='/'>works - music</Link>
          </li>
          <li>
            <Link to='/'>writing</Link>
          </li>
          <li>
            <Link to='/'>about</Link>
          </li>
          <li>
            <Link to='/'>skills</Link>
          </li>
          <li>
            <Link to='/'>slide</Link>
          </li>
          <li>
            <Link to='/'>contact</Link>
          </li>
        </ul>
      </BrowserRouter> */}
    </div>
  );
};

export default Article;