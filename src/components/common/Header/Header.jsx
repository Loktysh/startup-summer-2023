import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header>
      <Logo />
      <h1>Jobored</h1>
      <ul>
        <li>
          <Link to="search">Поиск Вакансий</Link>
        </li>
        <li>
          <Link to="favourite">Избранное</Link>
        </li>
      </ul>
    </header>
  );
};
