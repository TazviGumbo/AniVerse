import { createContext, useState, useContext, useEffect } from "react";

const AnimeContext = createContext();

export const useAnimeContext = () => useContext(AnimeContext);

export const AnimeProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const Storedfavorites = localStorage.getItem("favorites");
    if (Storedfavorites) setFavorites(JSON.parse(Storedfavorites));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addtoFavorite = (anime) => {
    setFavorites((prev) => [...prev, anime]);
  };
  const removefromfavorites = (anime) => {
    setFavorites((prev) => prev.filter((a) => a.mal_id !== anime.mal_id));
  };

  const isfavorite = (anime) => favorites.some((a) => a.mal_id === anime.mal_id);

  const value = {
    favorites,
    addtoFavorite,
    removefromfavorites,
    isfavorite,
  };

  return <AnimeContext.Provider value={value}>{children}</AnimeContext.Provider>;
};