import React, { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Head from "next/head"
import CardMedia from "@mui/material/CardMedia"
import axios from "axios"
import Box from "@mui/material/Box"
import Layout from "../components/layout"
import MovieCard from "../components/movie-card"
import Loader from "../components/loader"
import { convertToTitleCase } from "../static/lib"
import movies from "../static/movies"
import genres from "../static/genres"


export default function Home() {


    const port = 8000;

    const url = `http://localhost:${port}/api/movie`;

    const [moviesList, setMoviesList] = useState([]);
    // const moviesListValue = { moviesList, setMoviesList };


    // const [genres, setGenres] = useState([]);
    // const genresValue = { genres, setGenres };

    // const [directors, setDirectors] = useState([]);
    // const directorsValue = { directors, setDirectors };

    // const [actors, setActors] = useState([]);
    // const actrosValue = { actors, setActors };

    async function postAllMovies() {

        return movies.forEach(movie => {
            axios
                .post(url, movie)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => console.error(error));
        });
    }

    async function getMovies() {

        return await axios
            .get(url)
            .then((response) => {
                if (response.data.length === 0) {
                    postAllMovies();
                }
                setMoviesList([...response.data]);

            })
            .catch((error) => console.error(error));
    }

    //eslint-disable-next-line
    useEffect(() => { getMovies(); }, []);



    const emptyOption = " -- ";
    const ascending = "year-ascending";
    const descending = "year-descending";

    const [isLoading, setIsLoading] = useState(true);

    const [listToShow, setListToShow] = useState([]);

    const [selectedGenres, setSelectedGenres] = useState(null);
    const [selectedSortOption, setSelectedSortOption] = useState(null);


    const genresArray = [...genres];
    const sortArray = [ascending, descending];

    const optionsGenres = [{ value: emptyOption, label: emptyOption }, ...genresArray.map((genre, i) => (
        { value: genre, label: convertToTitleCase(genre, "-") }
    ))];

    const optionsYear = [{ value: emptyOption, label: emptyOption }, ...sortArray.map((option, i) => (
        { value: option, label: convertToTitleCase(option, " ") }
    ))];

    const sortMoviesToShow = useCallback((array, howToSort) => {
        function sortAscending(array) {
            return array.sort((movie1, movie2) => Number(movie1.year) - Number(movie2.year));
        }

        function sortDescending(array) {
            return array.sort((movie1, movie2) => Number(movie2.year) - Number(movie1.year));
        }

        return (
            array.length > 1 &&
                howToSort === ascending
                ? sortAscending(array)
                : sortDescending(array)
        );
    }, [ascending]);

    const handleChangeGenres = (selectedOption) => {

        if (selectedOption.value === emptyOption) {
            setSelectedGenres(null);
        }
        else {
            setSelectedGenres(selectedOption);
        }
    };

    const handleChangeSort = (selectedOption) => {

        if (selectedOption.value === emptyOption) {
            setSelectedSortOption(null);
        }
        else {
            setSelectedSortOption(selectedOption);
        }
    };

    useEffect(() => {
        if (moviesList.length > 0) {
            if (selectedGenres) {
                let updatedList = moviesList.filter((movie) => (
                    movie.genres.includes(selectedGenres.value)
                ));
                if (selectedSortOption) {
                    updatedList = sortMoviesToShow(updatedList, selectedSortOption.value);
                }
                setListToShow(updatedList)
            }
            else {
                let updatedList = [...moviesList];
                if (selectedSortOption) {
                    updatedList = sortMoviesToShow(updatedList, selectedSortOption.value);
                }
                setListToShow(updatedList);
            }
        }
    }, [moviesList, selectedGenres, selectedSortOption, sortMoviesToShow]);

    useEffect(() => {
        if (listToShow.length > 0) {
            isLoading
                && setTimeout(() => {
                    setIsLoading(false);
                }, 500);
            // if (navigationRef.current) {
            //     navigationRef.current.scrollIntoView({ behavior: 'smooth' });
            // }
        }
    }, [listToShow, isLoading]);

    return (
        <Layout
            title="Unreal Reel Insights!"
            subtitle="Explore in-depth information on the movies you love...">
            <Head>
                <title>Movie App</title>
            </Head>
            <Link href="https://en.wikipedia.org/wiki/Sonic_the_Hedgehog_3_(film)">
                <Box sx={{ display: "flex"}}>
                    {/* <CardMedia
                    component="img"
                    height="340"
                    image="/static/images/home-poster.png"
                    alt="Sonic 3 poster"
                    sx={{ top: "0", objectFit: "contain" }}
                /> */}
                    <CardMedia
                        component="img"
                        height="340"
                        image="/static/images/sonic-poster.png"
                        alt="Sonic 3 poster"
                        sx={{ top: "0", objectFit: "cover" }}
                    />
                </Box>
            </Link>

            <Box sx={{
                display: "flex",
                justifyContent: "space-evenly",
                p: "40px",
                flexWrap: "wrap",
                gap: "40px",
            }}>
                {isLoading && <Loader />}
                {!isLoading && (
                    listToShow.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            year={movie.year}
                            runtime={movie.runtime}
                            genres={movie.genres}
                            directors={movie.directors}
                            actors={movie.actors}
                            plot={movie.plot}
                            poster_url={movie.poster_url}
                        />
                    )))}
                {/* <i aria-hidden="true" style={{ width: 380, height: 400, }}></i> */}
                {/* <i aria-hidden="true" style={{ width: 380, height: 400, }}></i> */}
               
            </Box>

        </Layout>
    )
}