import '../css/Favorites.css';
import { useAnimeContext } from '../context/AnimeContext';
import AnimeCard from '../Components/AnimeCard';




function favorites() {
 const {favorites} = useAnimeContext();
 
 if (favorites){
     
  return (
<div className='Favorites'>
<h2>Favorites</h2>
<div className="favorites-grid">
{favorites.map((anime) => (
  <AnimeCard anime={anime} key={anime.id} />
))}
</div>
</div>
);
 }


  return <div className="favorites-empty">  
    <h2> No Favorite Anime</h2>
    <p>Go back to the home page and add some favorite anime</p> //make that thi showws when faverites are not there
  </div>
}

export default favorites;