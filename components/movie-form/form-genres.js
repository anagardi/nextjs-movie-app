import React, { useEffect, useState } from "react";
import GenresList from "/static/genres";
import FormLayout from "../form-layout"
import { convertToTitleCase } from "/static/lib";
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormGroup } from "@mui/material";

function FormGenres(props) {

    const [genres, setGenres] = useState(props.genres);

    function handleGenresChange(e) {

        let updatedList = [...genres];

        if (genres.includes(e.target.value)) {
            updatedList.splice(genres.indexOf(e.target.value), 1);

        } else {
            updatedList = [...genres, e.target.value];
        }
        setGenres(updatedList);
    }

    useEffect(() => { }, [genres]);

    return (
        <FormLayout title="Genres:">

            <Box sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                // gap: "5px",
                p: "5px 20px",
                fontSize: "12px"
            }}>
                {
                    GenresList.map((genre, i) => (
                        <FormControlLabel key={i} control={<Checkbox checked={genres?.includes(genre)} onChange={handleGenresChange} value={genre}/>} label={convertToTitleCase(genre, "-")} />
                    ))
                }
            </Box>
        </FormLayout>
    );
}

export default FormGenres;