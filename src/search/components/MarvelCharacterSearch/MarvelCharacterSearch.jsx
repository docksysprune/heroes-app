// MarvelCharacterSearch.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';
import { Container, Form, Card, Image } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import styles from './MarvelCharacterSearch.module.css'; // Archivo CSS Modules

const publicKey = 'fd6e171cc86952219e6d74499d02dbaa';
const privateKey = '80a09d07d02e6e3fded268c6927fec1706449744';

const MarvelCharacterSearch = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      const timestamp = new Date().getTime().toString();
      const hash = md5(timestamp + privateKey + publicKey);

      try {
        const apiUrl = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`;
        const response = await axios.get(apiUrl);
        setCharacters(response.data.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (query !== '') {
      fetchCharacters();
    }
  }, [query]);


  const handleSearch = () => {
    if (query.trim() !== '') {
      setCharacters([]);
      fetchCharacters();
    }
  };

  return (
    <Container>
      <Form className={styles.searchForm}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Search by character name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-primary mt-2" onClick={handleSearch}>
            Search
          </button>
        </Form.Group>
      </Form>

      <div className={styles.characterCards}>
        {loading ? (
          <Skeleton height={150} count={5} />
        ) : (
          characters.map((character) => (
            <Card key={character.id} className={styles.card}>
              <Card.Title>{character.name}</Card.Title>
              <Image
                src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
                alt={character.name}
                className={styles.characterImage}
              />
            </Card>
          ))
        )}
      </div>
    </Container>
  );
};

export default MarvelCharacterSearch;
