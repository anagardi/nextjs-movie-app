import { OutlinedInput } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
// import { DirectorsContext } from "../../utilities/context";

function FormDirector(props) {

    const [value, setValue] = useState(props.value);
    const [directors, setDirectors ] = useState(props.value);

    function handleChange(e) {
        let currentList = [...directors];
        let index = currentList.indexOf(value);
        const updatedValue = e.target.value;
        setValue(updatedValue);
        currentList.splice(index, 1, updatedValue);
        setDirectors(currentList);
    }

    function handleDelete() {
        let index = directors.indexOf(props.value);
        let currentList = [...directors];
        currentList.splice(index, 1);
        setDirectors(currentList);
    }

    useEffect(() => {
        // console.log("Updated directors: ", directors);
    }, [directors]);

    return (
        <Box className="wrapper-horizontal">
            <OutlinedInput type="text" placeholder="Enter director name" value={props.value} onChange={handleChange} />
            <Button className="btn delete centered-content" onClick={handleDelete} />
        </Box>
    );
}

export default FormDirector;