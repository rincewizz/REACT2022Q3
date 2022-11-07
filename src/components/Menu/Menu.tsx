import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuProp } from './types';
import styles from './Menu.module.scss';

function navigationCssClasses(navigationData: { isActive: boolean }) {
  return `${styles.menu__link} ${navigationData.isActive ? styles['menu__link--active'] : ''}`;
}

const linkList = [
  { name: 'Home', path: '/', testid: 'home-link' },
  { name: 'Form', path: '/form', testid: 'form-link' },
  { name: 'About us', path: '/about', testid: 'about-link' },
];

export default function Menu({ className }: MenuProp = { className: '' }) {
  return (
    <ul className={`${styles.menu} ${className}`}>
      {linkList.map((el) => (
        <li className={styles.menu__item} key={el.path}>
          <NavLink
            data-testid={el.testid}
            end={el.path === '/'}
            className={navigationCssClasses}
            to={el.path}
          >
            {el.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
