import React from 'react';
import { PageProps } from 'types/types';

export default class NotFound extends React.Component<PageProps> {
  public static defaultProps = {
    title: '',
  };
  componentDidMount() {
    document.title = this.props.title;
  }
  render() {
    return (
      <div className="not-found">
        <div className="not-found__text">Page not found</div>
      </div>
    );
  }
}
