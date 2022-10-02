import React from 'react';
import { PageProps } from 'types/types';

export default class About extends React.Component<PageProps> {
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
          About us
        </h1>
        <div className="text-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsum consequuntur
          doloribus nobis eligendi quis, enim accusantium consectetur modi assumenda pariatur ab?
          Inventore dolorem eius aliquid veniam earum eligendi atque? At totam ipsa illum,
          architecto eaque placeat omnis repellendus ullam aut excepturi obcaecati eum officia, iure
          quae magnam hic nesciunt ipsam corrupti maxime explicabo. Animi impedit adipisci autem
          mollitia delectus. Repellendus hic neque quo nulla, ab laboriosam commodi voluptatum.
          Laboriosam, nesciunt voluptatem facilis deserunt cupiditate eum, consequatur ratione, aut
          ut ad optio nisi vel exercitationem enim! Quasi facilis sit provident. Ea aliquam atque
          vitae odit fugit quaerat, perferendis, repudiandae eius sequi, numquam doloribus minima
          illum earum et laboriosam! Sunt quis minus ducimus, dolorem quae pariatur corrupti est
          facilis officiis autem. Quaerat obcaecati possimus ex eaque porro corrupti velit, minima
          laudantium numquam dicta dolorum quis rem temporibus sed unde perspiciatis perferendis
          illo! Aut labore iusto maxime qui eveniet esse natus dolor.
        </div>
      </div>
    );
  }
}
