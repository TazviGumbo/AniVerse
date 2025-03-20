import "../css/AnimeCard.css";
import { useAnimeContext } from "../context/AnimeContext";

function AnimeCard({ anime }) {
  const {isfavorite, removefromfavorites, addtoFavorite} = useAnimeContext();
  const favorite = isfavorite(anime);

  function onFavoriteClick(e) { //still need to test it
    e.preventDefault() 
if (favorite) removefromfavorites (anime)
  else addtoFavorite(anime)

  }

  return (
    <div className="Anime-card">
      <div className="Anime-poster">
        <img src={anime.images.jpg.image_url} alt={`${anime.title} - ${anime.release_date}`} />
        <div className="Anime-overlay">
          <button className= {'favorite-btn ${favorite ? "active" : ""}'} onClick={onFavoriteClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="Anime-info">
        <h3>{anime.title}</h3>
        <p>{anime.release_date}</p>
      </div>
    </div>
  );
}

export default AnimeCard;
