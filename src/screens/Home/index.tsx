import {useState, useCallback, useEffect} from 'react';
import { Link } from 'react-router-dom';

import Movie from '../../components/Movie';
import { MovieProps } from '../../types';
import './index.css';

function Home() {
  const [movies, setMovies] = useState([] as Array<MovieProps>);
  const getMovies = useCallback(() => {
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17&language=en-US&page=1`;
    fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json() as Promise<{results: Array<MovieProps>}> )
      .then(data => {
        setMovies(data.results);
      })
  },[]);

  useEffect(() => {
    getMovies();
  }, [getMovies])

  return (
    <div className='Home'>
      <div className='Home-Header'>
        BPTN Test Home
      </div>
      <Link to="liked">
        Liked
      </Link>
      <div className='Movie-List'>
        { movies.length && movies.map(movie => <Movie {...movie} key={movie.id} type='Home' />) }
      </div>
    </div>
  );
}

export default Home;