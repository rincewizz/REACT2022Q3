import { AppContext } from 'appState/appContext';
import { ICard } from 'components/Cards/types';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { PageProps } from 'types/types';

export default function AboutPage(props: PageProps) {
  useEffect(() => {
    document.title = props.title ?? '';
  });
  const { searchResults } = useContext(AppContext);
  const { characterId } = useParams();
  const [character, setCharacter] = useState<ICard>({});
  const navigate = useNavigate();

  useEffect(() => {
    const currentCharacter = searchResults.find((el) => el._id === characterId);
    if (currentCharacter) {
      setCharacter(currentCharacter);
    } else {
      navigate('/');
    }
  });
  const { name, race, gender, birth, death, hair, height, realm, spouse, wikiUrl } = character;

  return (
    <div className="container">
      <h1 className="title" data-testid="about-page">
        {name}
      </h1>
      <div className="text-content">
        <div>
          <b>Name: </b> {name}
        </div>
        <div>
          <b>Race: </b> {race}
        </div>
        <div>
          <b>Gender: </b> {gender}
        </div>
        <div>
          <b>Birth: </b> {birth}
        </div>
        <div>
          <b>Death: </b> {death}
        </div>
        <div>
          <b>Hair: </b> {hair}
        </div>
        <div>
          <b>Height: </b> {height}
        </div>
        <div>
          <b>Realm: </b> {realm}
        </div>
        <div>
          <b>Spouse: </b> {spouse}
        </div>
        <div>
          <b>Wiki: </b>
          <a href={wikiUrl} target="_blank" rel="noopener noreferrer">
            {wikiUrl}
          </a>
        </div>
      </div>
      <Link className="button button--back" to="/" onClick={() => navigate(-1)}>
        Back
      </Link>
    </div>
  );
}
