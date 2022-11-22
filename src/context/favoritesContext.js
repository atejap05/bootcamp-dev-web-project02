import { createContext, useContext } from "react";
import { useState } from "react";

const FavoritesContext = createContext(null);

// Custom hook
export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);

  if (context === "undefined") {
    throw new Error(
      "FavoritesContext must be within FavoritesContextProvider!"
    );
  }

  return context;
};

const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = book => {
    setFavorites(prev => [...prev, book]);
  };

  const removeFromFavorites = id => {
    setFavorites(prev => prev.filter(book => book.id !== id));
  };

  return (
    <FavoritesContext.Provider
      value={{ addToFavorites, removeFromFavorites, favorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
