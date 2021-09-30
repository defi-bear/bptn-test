import { useState } from 'react';

function useLikeStatus(id: number, initial: boolean) {
  const [isLiked, setLike] = useState<boolean>(() => {
    try {
      const movie = window.localStorage.getItem('Movie');
      const parsedItem = movie ? JSON.parse(movie) : {};

      return parsedItem[id] ? parsedItem[id] : initial;
    } catch (error) {
      return initial;
    }
  });

  const setValue = (value: boolean | ((val: boolean) => boolean)) => {
    try {
      setLike(value);
      
      const movie = window.localStorage.getItem('Movie');
      const parsedItem = movie ? JSON.parse(movie) : {};
      parsedItem[id] = value;
      window.localStorage.setItem('Movie', JSON.stringify(parsedItem));
    } catch {

    }
  }

  return [isLiked, setValue] as const;
}

export default useLikeStatus;