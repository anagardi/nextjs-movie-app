import React, { useEffect, useState } from "react"
import FormTitle from "./components/title"
import FormYear from "./components/year"
import FormRuntime from "./components/runtime"
import FormGenres from "./components/genres"
import FormDirectors from "./components/directors"
import FormActors from "./components/actors"
import FormPlot from "./components/plot"
import FormPoster from "./components/poster"
import Link from "next/link"
import { Button, Box, CardContent, Card, CardMedia } from "@mui/material"
import axios from "axios"
import Loader from "../loader"
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
        "year": null,
        "runtime": null,
        "genres": [],
        "directors": [""],
        "actors": [""],
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
            title: title,
            year: year,
            runtime: runtime,
            poster_url: poster,
            plot: plot,
            directors: directors,
            actors: actors,
            genres: genres,
        };

        if (id) {
            putMovie(url, updatedMovie);
        } else {
            postMovie(url, updatedMovie);
        }
        router.push("/");
    }

    async function postMovie(url, movie) {
        return axios
            .post(url, movie)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => console.error(error));
    }

    async function putMovie(url, movie) {
        return axios
            .put(url, movie)
            .then((response) => {
                console.log(response.data);
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

    const [title, setTitle] = useState("");
    const [year, setYear] = useState(null);
    const [runtime, setRuntime] = useState(null);
    const [genres, setGenres] = useState([]);
    const [directors, setDirectors] = useState([""]);
    const [actors, setActors] = useState([""]);
    const [plot, setPlot] = useState("");
    const [poster, setPoster] = useState("");

    useEffect(() => {
        setTitle(movie?.title?.toUpperCase());
        setYear(movie?.year);
        setRuntime(Number(movie?.runtime));
        setGenres(movie?.genres);
        setDirectors(movie?.directors);
        setActors(movie?.actors);
        setPlot(movie?.plot);
        setPoster(movie?.poster_url);
    }, [movie]);

    useEffect(() => {
        console.log("title: ", title);
        console.log("year: ", year);
        console.log("runtime: ", runtime);
        console.log({ genres });
        console.log({ directors });
        console.log({ actors });
        console.log("plot: ", plot);
        console.log("poster: ", poster);
    }, [title, year, runtime, genres, directors, actors, plot, poster]);

    return (
        isLoading
            ? <Loader />
            : movie &&
            // <FormControl sx={{ display: 'flex', width: "60%", maxWidth: "60%", justifyContent: "center", alignItems: "center", m: "40px 20%"}}>
            <Card sx={{ display: 'flex', flexDirection: "column", width: "50%", alignItems: "center", justifyContent: "center", m: "40px 25%" }}>
                <CardMedia
                    component="img"
                    height="170"
                    image={id ? poster : "/static/images/streaming.webp"}
                    alt="privacy policy" />
                <CardContent sx={{ width: "100%", p: "40px" }}>
                    <form onSubmit={handleSubmit} autoComplete="off">

                        <FormTitle name="title" title={title} onChange={(value) => setTitle(value.toUpperCase())} />

                        <Box sx={{ display: "flex", justifyContent: "space-between" }} width="100%" gap="40px">

                            <FormYear name="year" year={year} onChange={(event) => setYear(event === null ? new Date(year, null) : event["$y"])} />

                            <FormRuntime name="runtime" runtime={runtime} onChange={(value) => setRuntime(value)} sx={{ alignItems: "right" }} />

                        </Box>

                        <FormGenres name="genres" genres={genres}
                            onChange={(value) => {
                                let updatedList = [...genres];
                                if (genres.includes(value)) {
                                    updatedList.splice(genres.indexOf(value), 1);
                                } else {
                                    updatedList = [...genres, value];
                                }
                                setGenres(updatedList);
                            }} />

                        <FormDirectors name="directors" directors={directors}
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

                        <FormActors name="actors" actors={actors}
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

                        <FormPlot name="plot" plot={plot} onChange={(value) => setPlot(value)} />

                        <FormPoster name="poster_url" poster={poster} onChange={(value) => setPoster(value)} />

                        <Box sx={{ display: 'flex', gap: "40px", justifyContent: "center", alignItems: "center", m: "35px 0 20px 0" }}>
                            <Button name="save" variant="contained" type="submit" sx={{ backgroundColor: "secondary.main", minWidth: '100px' }}>Save</Button>
                            <Link href="/" >
                                <Button name="cancel" variant="contained" sx={{ backgroundColor: "primary.light", minWidth: '100px' }}>Cancel</Button>
                            </Link>
                        </Box>
                    </form>
                </CardContent>
            </Card >
        // </FormControl>
    );
}

export default MovieForm;