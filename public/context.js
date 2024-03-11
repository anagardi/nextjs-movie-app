import { createContext } from 'react';

export const MoviesListContext = createContext({
    moviesList: [],
    setMoviesList: () => { }
});

export const GenresContext = createContext({
    genresList: [],
    setGenresList: () => { }
});

export const DirectorsContext = createContext({
    directorsList: [],
    setDirectorsList: () => { }
});

export const ActorsContext = createContext({
    actorsList: [],
    setActorsList: () => { }
});