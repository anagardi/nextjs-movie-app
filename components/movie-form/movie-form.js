import React, { useEffect, useContext, useState, useMemo } from "react";
import FormTitle from "./form-title";
import FormYear from "./form-year";
import FormRuntime from "./form-runtime";
import FormGenres from "./form-genres";
import FormDirectors from "./form-directors";
import FormActors from "./form-actors";
import FormPlot from "./form-plot";
import FormPoster from "./form-poster";
import Link from "next/link";
import { Button, Box, CardContent, Card } from "@mui/material";
// import { ActorsContext, DirectorsContext, GenresContext, MoviesListContext } from "../../utilities/context";
import axios from "axios";
import Loader from "../../components/loader";
import { useRouter } from 'next/router'


function MovieForm() {

    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter()
    const { id } = router.query;
    console.log({ id });

    const port = 8000;
    const url = `http://localhost:${port}/api/movie/${id}`;

    const [movie, setMovie] = useState({
        "title": "",
        "year": "",
        "runtime": "",
        "genres": [],
        "directors": [],
        "actors": [],
        "plot": "",
        "poster_url": ""
    });

    async function getMovie() {

        return await axios
            .get(url)
            .then((response) => {
                setMovie(response.data);
            })
            .catch((error) => console.error(error));
    }

    function handleSubmit(e) {

        e.preventDefault();

        const url = id
            ? `http://localhost:${port}/api/movie/${Number(id)}`
            : `http://localhost:${port}/api/movie`;

        const updatedMovie = {
            ...movie,
            title: e.target.title.value,
            year: e.target.year.value,
            runtime: e.target.runtime.value,
            poster_url: e.target.poster_url.value,
            plot: e.target.plot.value,
            directors: directors,
            actors: actors,
            genres: genres,
        };

        if (id) {
            putMovie(url, updatedMovie);
        } else {
            postMovie(url, updatedMovie);
        }
    }

    async function postMovie(url, movie) {
        return axios
            .post(url, movie)
            .then((response) => {
                console.log(response.data);
                setMoviesList([response.data, ...moviesList]);
                navigate("/");
            })
            .catch((error) => console.error(error));
    }

    async function putMovie(url, movie) {
        return axios
            .put(url, movie)
            .then((response) => {
                console.log(response.data);
                router.push("/", { scroll: false });
            })
            .catch((error) => console.error(error));
    }


    useEffect(() => {
        if (id !== null) {
            isLoading
                &&
                getMovie()
                &&
                setTimeout(() => {
                    setIsLoading(false);
                }, 500);
        }
    }, [id]);

    const [genres, setGenres] = useState([]);

    const [directors, setDirectors] = useState([]);

    const [actors, setActors] = useState([]);

    useEffect(() => {
        setGenres(movie?.genres);
        setDirectors(movie?.directors);
        setActors(movie?.actors);
    }, [movie]);

    useEffect(() => {
        console.log({ genres });
        console.log({ directors });
        console.log({ actors });
    }, [genres, directors, actors]);

    return (
        isLoading
            ? <Loader />
            : movie &&
            // <FormControl sx={{ display: 'flex', width: "60%", maxWidth: "60%", justifyContent: "center", alignItems: "center", m: "40px 20%"}}>
            <Card sx={{ display: 'flex', width: "50%", maxWidth: "60%", justifyContent: "center", alignItems: "center", m: "40px 25%" }}>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <CardContent sx={{ p: "40px" }}>
                        <FormTitle title={movie.title} />
                        {/* <Box sx={{display: "flex", justifyContent: "space-between"}} width="100%"> */}
                        <FormYear year={movie.year} />
                        <FormRuntime runtime={movie.runtime} />
                        {/* </Box> */}

                        <FormGenres genres={genres} />

                        <FormDirectors directors={directors}
                            onAdd={() => { setDirectors([...directors, ""]) }}
                            onDelete={(index) => {
                                console.log({ index });
                                let currentList = [...directors];
                                currentList.splice(index, 1);
                                setDirectors(currentList);
                            }}
                            onChange={(index, value) => {
                                let currentList = [...directors];
                                const updatedValue = value;
                                currentList.splice(index, 1, updatedValue);
                                setDirectors(currentList);
                            }} />

                        <FormActors actors={actors}
                            onAdd={() => { setActors([...actors, ""]) }}
                            onDelete={(index) => {
                                console.log({ index });
                                let currentList = [...actors];
                                currentList.splice(index, 1);
                                setActors(currentList);
                            }}
                            onChange={(index, value) => {
                                let currentList = [...actors];
                                const updatedValue = value;
                                currentList.splice(index, 1, updatedValue);
                                setActors(currentList);
                            }} />

                        <FormPlot plot={movie.plot} />

                        <FormPoster poster_url={movie.poster_url} />

                        <Box sx={{ display: 'flex', gap: "40px", justifyContent: "center", alignItems: "center", mt: "35px" }}>
                            <Button variant="contained" type="submit" sx={{ backgroundColor: "secondary.main", minWidth: '100px' }}>Save</Button>
                            <Link href="/" >
                                <Button variant="contained" sx={{ backgroundColor: "primary.light", minWidth: '100px' }}>Cancel</Button>
                            </Link>
                        </Box>
                    </CardContent>
                </form>
            </Card >
        // </FormControl>
    );
}

export default MovieForm;