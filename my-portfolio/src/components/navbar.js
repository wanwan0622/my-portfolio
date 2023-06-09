import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LinkItem from './LinkItem';
import styles from '../styles/Navbar.module.css';

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
        <ul className={styles.menu}>
          {navbar_lists.map((value) => (
            <li key={value.text}>
              <LinkItem href={value.href} is_newpage={false}>{value.text}</LinkItem>
            </li>
          ))}
        </ul>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;