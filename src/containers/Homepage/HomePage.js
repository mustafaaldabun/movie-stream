import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HomePage.css';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import GenreCard from '../../components/GenreCard/GenreCard';

const HomePage = () => {
  const [genreStore, setGenreStore] = useState([]);
  const [movieStore, setMovieStore] = useState([]);

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = 'Bearer Wookie2021';
    axios.get('https://wookie.codesubmit.io/movies').then((res) => {
      let genres = [];
      let movieObj = res.data.movies;
      movieObj.map((el) => el.genres.map((genre) => (genres.push(genre))));
      genres = genres.filter((a, b) => genres.indexOf(a) === b);
      setGenreStore([...genres]);
      setMovieStore([...movieObj]);
    })
  }, []);

  const handleInput = async (query) => {
    await axios.get(`https://wookie.codesubmit.io/movies?q=${query}`).then((res) => {
      let genres = [];
      let movieObj = res.data.movies;
      movieObj.map((el) => el.genres.map((genre) => (genres.push(genre))));
      genres = genres.filter((a, b) => genres.indexOf(a) === b);
      setGenreStore([...genres]);
      setMovieStore([...movieObj]);
    });
  };

  return (
    <div className="HomePage">
      <Navbar className="Navbar" bg="dark" variant="dark">
        <Navbar.Brand style={{ fontSize: '3em' }} className="mr-auto">Wookie Movies</Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search movie" className="mr-sm-2" onChange={(e) => handleInput(e.target.value)} />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <div>
        <GenreCard genre={genreStore} movie={movieStore} />
      </div>
    </div>
  )
}

export default HomePage;
