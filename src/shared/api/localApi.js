function LocalApi() {
  const KEY = 'movies';

  const getMovies = () => {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  };

  const saveMovies = (movies) => {
    localStorage.setItem(KEY, JSON.stringify(movies));
  };

  return {
    
    startApi() {


      return Promise.resolve(getMovies());
    },

    addApi(movieData) {
      const movies = getMovies();

      const newMovie = {
        ...movieData,
        id: Date.now(),
      };

      const updated = [...movies, newMovie];
      saveMovies(updated);

      return Promise.resolve(newMovie);
    },

    redactApi(id, movieData) {
      const movies = getMovies();

      const updated = movies.map((movie) =>
        movie.id === id ? { ...movie, ...movieData, id } : movie
      );

      saveMovies(updated);

      return Promise.resolve({ id, ...movieData });
    },

    deleteApi(id) {
      const movies = getMovies();

      const updated = movies.filter((movie) => movie.id !== id);

      saveMovies(updated);

      return Promise.resolve({ success: true });
    },
  };
}

export default LocalApi;

