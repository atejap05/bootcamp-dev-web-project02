import {createContext, useContext, useState} from "react";
import axios from "axios";
import {useAuthContext} from "./authContext";

const FavoritesContext = createContext(null);

// Custom hook
export const useFavoritesContext = () => {
    const context = useContext(FavoritesContext);

    if (context === undefined) {
        throw new Error("FavoritesContext must be within FavoritesContextProvider!"
        );
    }

    return context;
};

const FavoritesContextProvider = ({children}) => {

    const {user} = useAuthContext();

    const [favorites, setFavorites] = useState([]);
    const [favoriteTotal, setFavoriteTotal] = useState( 0)

    const addToFavorites = book => {
        setFavorites(prev => {
            const newFavorites = [...prev, book]

            user.favorito.push(book)

            console.log("requisição vem daqui => addToFavorites")

            axios.put(`https://ironrest.cyclic.app/appbooks/${user._id}`, {
                usuario: user.usuario,
                senha: user.senha,
                favorito: user.favorito
            })
                .then(res => {

                })

            return newFavorites
        });
    };

    const removeFromFavorites = id => {
        setFavorites(prev => {

            const newFavorites = prev.filter(book => book.id !== id)
            console.log("requisição vem daqui => removeFromFavorites")
            axios.put(`https://ironrest.cyclic.app/appbooks/${user._id}`, {
                usuario: user.usuario,
                senha: user.senha,
                favorito: newFavorites
            })
                .then(res => {

                })

            return newFavorites
        });
    };

    const updateTotal = (i) => {
        setFavoriteTotal(prev => {

            console.log(` prev ${prev}`)
            console.log(`i ${i}`)
            console.log(`prev + i ${prev + i}`)

            return prev + i
        })
    }

    return (
        <FavoritesContext.Provider
            value={{addToFavorites, removeFromFavorites, favorites, favoriteTotal, updateTotal}}
        >
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesContextProvider;
