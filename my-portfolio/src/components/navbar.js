import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavbarLink from './NavbarLink';

const navbar_lists = [
  {href: '#feature', text: 'feature'},
  {href: '#works-programming', text: 'works - programming'},
  {href: '#works-design', text: 'works - design'},
  {href: '#works-music', text: 'works - music'},
  {href: '#writing', text: 'writing'},
  {href: '#about', text: 'about'},
  {href: '#skills', text: 'skills'},
  {href: '#slide', test: 'slide'},
  {href: '#contact', test: 'contact'}
]

const Navbar = () => {
  return (
    <div>
      <BrowserRouter>
        <ul>
          {navbar_lists.map((value) => (
            <li key={value.text}>
              <NavbarLink href={value.href}>{value.text}</NavbarLink>
            </li>
          ))}
        </ul>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;