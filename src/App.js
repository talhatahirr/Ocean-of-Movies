import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

// 4d26c737

const API_URL = 'http://www.omdbapi.com?apikey=4d26c737';

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const search_movie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log({movies});
  }

  useEffect(() => {
    search_movie('batman');
  }, []);

  return (
    <div className="App">
      <h1>Ocean of Movies</h1>
      <div className='search'>
        <input placeholder='Search for movies' 
        value={searchTerm}
        onChange={(e) => {setSearchTerm(e.target.value)}}
        />
        <img 
          src={SearchIcon}
          alt="search"
          onClick={() => {search_movie(searchTerm)}}
        />
      </div>
      {
        movies?.length > 0
          ?(
            <div className='container'>
              {
                movies.map((e) => (
                <MovieCard movie = {e}/>
                ))
              }
            </div>
          ) : (
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
        )
      }
      <div className='footer'>
        <p>Powered by @talhatahir</p>
      </div>
    </div>
  );
}

export default App;