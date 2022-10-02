import Menu from 'components/Menu/Menu';
import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Menu className="header__menu" />
      </header>
    );
  }
}
