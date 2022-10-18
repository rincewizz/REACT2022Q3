import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuProp } from './types';
import styles from './Menu.module.scss';

export default class Menu extends React.Component<MenuProp> {
  public static defaultProps = {
    className: '',
  };
  private navigationCssClasses(navigationData: { isActive: boolean }) {
    return `${styles.menu__link} ${navigationData.isActive ? styles['menu__link--active'] : ''}`;
  }

  render() {
    return (
      <ul className={`${styles.menu} ${this.props.className}`}>
        <li className={styles.menu__item}>
          <NavLink data-testid="home-link" end className={this.navigationCssClasses} to="/">
            Home
          </NavLink>
        </li>
        <li className={styles.menu__item}>
          <NavLink data-testid="form-link" className={this.navigationCssClasses} to="/form">
            Form
          </NavLink>
        </li>
        <li className={styles.menu__item}>
          <NavLink data-testid="about-link" className={this.navigationCssClasses} to="/about">
            About us
          </NavLink>
        </li>
      </ul>
    );
  }
}
