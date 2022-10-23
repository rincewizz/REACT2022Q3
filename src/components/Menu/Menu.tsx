import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuProp } from './types';
import styles from './Menu.module.scss';

export default function Menu(props: MenuProp = { className: '' }) {
  function navigationCssClasses(navigationData: { isActive: boolean }) {
    return `${styles.menu__link} ${navigationData.isActive ? styles['menu__link--active'] : ''}`;
  }

  return (
    <ul className={`${styles.menu} ${props.className}`}>
      <li className={styles.menu__item}>
        <NavLink data-testid="home-link" end className={navigationCssClasses} to="/">
          Home
        </NavLink>
      </li>
      <li className={styles.menu__item}>
        <NavLink data-testid="form-link" className={navigationCssClasses} to="/form">
          Form
        </NavLink>
      </li>
      <li className={styles.menu__item}>
        <NavLink data-testid="about-link" className={navigationCssClasses} to="/about">
          About us
        </NavLink>
      </li>
    </ul>
  );
}
