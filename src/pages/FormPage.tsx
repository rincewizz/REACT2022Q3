import React from 'react';
import { PageProps } from 'types/types';

export default class FormPage extends React.Component<PageProps> {
  public static defaultProps = {
    title: '',
  };
  componentDidMount() {
    document.title = this.props.title;
  }
  render() {
    return (
      <div className="container">
        <h1 className="title" data-testid="about-page">
          Form
        </h1>
        <div className="text-content">Form</div>
      </div>
    );
  }
}
