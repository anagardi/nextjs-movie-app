import React, { useEffect, useState } from "react";
import GenresList from "/public/genres";
import FormLayout from "../../form-layout"
import { convertToTitleCase } from "/public/lib";
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';

function FormGenres(props) {

    return (
        <FormLayout title="Genres:">

            <Box sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                // gap: "5px",
                p: "5px 0px",
                fontSize: "12px"
            }}>
                {
                    GenresList.map((genre, i) => (
                        <FormControlLabel key={i} control={<Checkbox checked={props.genres?.includes(genre)}
                            onChange={(e) => { props.onChange(e.target.value) }}
                            value={genre} />} label={convertToTitleCase(genre, "-")} />
                    ))
                }
                <i aria-hidden="true"></i>
                <i aria-hidden="true"></i>
                <i aria-hidden="true"></i>
                <i aria-hidden="true"></i>
                <i aria-hidden="true"></i>
                <i aria-hidden="true"></i>
            </Box>
        </FormLayout>
    );
}

export default FormGenres;