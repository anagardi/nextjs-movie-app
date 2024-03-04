import React, { useContext, useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from 'next/router'
import axios from "axios"
import { Dialog, DialogContentText, DialogTitle, DialogActions, DialogContent, Button, Card, CardContent, CardMedia, Box, Typography } from "@mui/material"
import Layout from "../../components/layout"

import styles from "../../styles/full-movie-description.module.css"

export default function FullMovieDescription() {

    const router = useRouter()
    const { id } = router.query;
    console.log(id);

    const port = 8000;
    const url = `http://localhost:${port}/api/movie/${id}`;

    const [movie, setMovie] = useState({});

    async function getMovie() {

        return await axios
            .get(url)
            .then((response) => {
                setMovie(response.data);
            })
            .catch((error) => console.error(error));
    }

    //eslint_disable_next_line
    useEffect(() => { getMovie() }, [id]);

    console.log(movie);

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = async () => {
        await axios
            .delete(url)
            .then((response) => {
                console.log(`DELETE: movie, id: ${id}, is deleted: `, response.data);
                setMoviesList(moviesList.filter((movie) => movie.id !== response.data.id));
            })
            .catch((error) => console.error(error));
    };

    useEffect(() => { window.scrollTo(0, 0) }, []);

    return (
        <Layout>
            <Card sx={{ display: 'flex', width: "70%", justifyContent: "center", alignItems: "center", m: "40px 15%" }}>

                <Box sx={{ display: 'flex', flexDirection: 'column', p: "40px" }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Box>
                            <Box className={styles.movie_genres_full}>
                                <Box className={styles.category_container}>
                                    {
                                        !!movie?.genres && Array.isArray(movie.genres) && (
                                            movie.genres.map((genre, i) => (
                                                <Typography className={styles.movie_genre_full} key={i}>{genre}</Typography>
                                            ))
                                        )
                                    }
                                </Box>
                            </Box>
                            <Typography className={styles.movie_title_full}>{movie?.title}</Typography>
                            <Box className={styles.movie_year_full}>
                                <Typography component="span" className={styles.category_title}>Released in:</Typography>
                                <Typography>{movie?.year}</Typography>
                            </Box>
                            <Box className={styles.movie_runtime_full}>
                                <Typography component="span" className={styles.category_title}>Runtime:</Typography>
                                <Typography>{movie?.runtime} minutes</Typography>
                            </Box>

                            <Box className={styles.movie_directors_full}>
                                <Typography component="span" className={styles.category_title}>Directors:</Typography>
                                <Box className={styles.category_container}>
                                    {
                                        !!movie?.directors && Array.isArray(movie.directors) && (
                                            movie.directors.map((director, i) => (
                                                <Typography className={styles.movie_director} key={i}>{director}</Typography>
                                            ))
                                        )
                                    }
                                </Box>
                            </Box>
                            <Box className={styles.movie_actors_full}>
                                <Typography component="span" className={styles.category_title}>Actors:</Typography>
                                <Box className={styles.category_container}>
                                    {
                                        !!movie?.actors && Array.isArray(movie.actors) && (
                                            movie.actors.map((actor, i) => (
                                                <Typography className={styles.movie_actor} key={i}>{actor}</Typography>
                                            ))
                                        )
                                    }
                                </Box>
                            </Box>
                        </Box>
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 400 }}
                    image={movie?.poster_url}
                    alt={movie?.title + " film poster"}
                />


            </Card>
            <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "40px", mb: "40px"}}>
                <Link href={`/movie/edit/${id}`}>
                    <Button variant="contained" sx={{ minWidth: '100px', backgroundColor: "primary.light" }}>Edit</Button>
                </Link>
                <Button variant="contained" sx={{ minWidth: '100px', backgroundColor: "secondary.light" }} onClick={handleOpen}>Delete</Button>
                <Dialog open={open} onClose={handleClose} >
                    <DialogTitle>“{movie?.title}”</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to delete this movie?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Link href="/">
                            <Button onClick={handleDelete} sx={{ minWidth: '100px', backgroundColor: "primary.light" }} variant="contained">Delete</Button>
                        </Link>
                        <Button onClick={handleClose} sx={{ minWidth: '100px', backgroundColor: "primary.darker" }} variant="contained" autoFocus>Cancel</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </Layout>
    );
}
