import {useState, useCallback, useEffect} from 'react';
import { Link } from 'react-router-dom';

import Movie from '../../components/Movie';
import { MovieProps } from '../../types';
import './index.css';

function LikePage() {
  const [movies, setMovies] = useState([] as Array<MovieProps>);
  const getMovies = useCallback(() => {
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17&language=en-US&page=1`;
    fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json() as Promise<{results: Array<MovieProps>}> )
      .then(data => {
        const movie = window.localStorage.getItem('Movie');
        const parsedItem = movie ? JSON.parse(movie) : {};

        const result = data.results.filter(movie => parsedItem[movie.id])
        console.log('results', result)
        setMovies(result);
      })
  },[]);

  useEffect(() => {
    getMovies();
  }, [getMovies])

  return (
    <div className='Like'>
      <div className='Like-Header'>
        BPTN Test Liked
      </div>
      <Link to="/">
        Home
      </Link>
      <div className='Movie-List'>
        { movies.length && movies.map(movie => <Movie {...movie} key={movie.id} type='Liked' />) }
      </div>
    </div>
  );
}

export default LikePage;