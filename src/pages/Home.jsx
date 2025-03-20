import AnimeCard from "../Components/AnimeCard";
import { useState, useEffect } from "react";
import { searchAnime, getTopAnime } from "../Services/API";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [anime, setAnime] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularAnime = async () => {
      try {
        const popularAnime = await getTopAnime();
        setAnime(popularAnime);
      } catch (err) {
        console.log(err);
        setError("Failed to Load Anime :(");
      } finally {
        setLoading(false);
      }
    };
    loadPopularAnime();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const searchResults = await searchAnime(searchQuery);
      setAnime(searchResults);
      setError(null);
    } catch (err) {
      setError("Failed to Load Anime :(");
    } finally {
      setLoading(false);
    }

    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for an anime"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading"> Loading...</div> // laoding when you refresh page come back fix this
      ) : (
        <div className="anime-grid">
          {anime.map((anime) => (
            <AnimeCard anime={anime} key={anime.id} />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
