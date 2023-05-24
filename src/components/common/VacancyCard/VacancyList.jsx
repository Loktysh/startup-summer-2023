import React from 'react';

export const VacancyList = () => {
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
