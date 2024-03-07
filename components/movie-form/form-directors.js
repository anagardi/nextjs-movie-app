import React, { useEffect, useState } from "react";
import FormLayout from "../form-layout";
import { Button, Box, OutlinedInput, IconButton, CardMedia } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

function FormDirectors(props) {

    const [directors, setDirectors] = useState(props.directors);

    function handleChange(e) {
        // let currentList = [...directors];
        // let index = currentList.indexOf(value);
        // const updatedValue = e.target.value;
        // setValue(updatedValue);
        // currentList.splice(index, 1, updatedValue);
        // setDirectors(currentList);
    }

    function handleDelete() {
        // let index = directors.indexOf(props.value);
        // let currentList = [...directors];
        // currentList.splice(index, 1);
        // setDirectors(currentList);
    }
    function handleAdd() {
        // setDirectors([...directors, ...[""]]);
    }

    useEffect(() => { }, [directors]);
    return (
        <FormLayout title="Directors:">

            {
                directors?.map((director, i) => (
                    <Box key={i} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", columnGap: "5px", width: "100%" }}>
                        <OutlinedInput placeholder="Enter director name" value={director} onChange={handleChange} sx={{ width: "100%" }} />
                        <IconButton aria-label="delete" size="large" color="primary" style={{ borderRadius: 0}} >
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                ))
            }
            <Box sx={{ display: "flex", width: "100%", justifyContent: "center", mt: "20px" }}>
                <Button variant="contained" sx={{ backgroundColor: "primary.light", width: "100px" }}>Add</Button>
            </Box>
        </FormLayout >
    );
}

export default FormDirectors;