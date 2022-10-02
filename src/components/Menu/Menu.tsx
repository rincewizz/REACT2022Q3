import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuProp } from 'types/types';
import styles from './Menu.module.scss';

export default class Menu extends React.Component<MenuProp> {
  public static defaultProps = {
    className: '',
  };
  private navCssClasses(navData: { isActive: boolean }) {
    return `${styles.menu__link} ${navData.isActive ? styles['menu__link--active'] : ''}`;
  }

  render() {
    return (
      <ul className={`${styles.menu} ${this.props.className}`}>
        <li className={styles.menu__item}>
          <NavLink data-testid="home-link" end className={this.navCssClasses} to="/">
            Home
          </NavLink>
        </li>
        <li className={styles.menu__item}>
          <NavLink data-testid="about-link" className={this.navCssClasses} to="/about">
            About us
          </NavLink>
        </li>
      </ul>
    );
  }
}
