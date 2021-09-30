import UseAnimations from "react-useanimations";
import heart from 'react-useanimations/lib/heart'
import useLikeStatus from "../../hooks/useLikeStatus";

import { MovieProps } from '../../types';
import './index.css';

function Movie(movie: MovieProps) {
  const [isLiked, setValue] = useLikeStatus(movie.id, false);

  return (
    <div className='Movie-Container'>
      <img src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`} alt={`${movie.title}_backdrop`} />
      <div className='Movie-title'>{movie.title}</div>
      {
        movie.type === 'Home' ? <UseAnimations
          animation={heart}
          size={30}
          reverse={isLiked}
          onClick={() => setValue(!isLiked)}
          style={{ cursor: "pointer", fill: "red" }}
        /> : null
      }
      
    </div>
  )
}

export default Movie;