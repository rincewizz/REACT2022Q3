import React from 'react';

export default class Menu extends React.Component {
  public static defaultProps = {
    className: '',
  };

  render() {
    return (
      <ul>
        <li>
          <a href="a">Home</a>
        </li>
        <li>
          <a href="/about">About us</a>
        </li>
      </ul>
    );
  }
}
