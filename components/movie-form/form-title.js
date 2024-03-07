import React, { useState } from "react"
import OutlinedInput from '@mui/material/OutlinedInput'
import FormLayout from "../form-layout";

function FormTitle(props) {

    const maxLength = 255;

    const [title, setTitle] = useState(props.title?.toUpperCase());

    function handleTitleChange(e) {
        setTitle(e.target.value.toUpperCase());
    }

    return (
        <FormLayout title="Title:">
            <OutlinedInput name="title" placeholder="Enter movie title" onChange={handleTitleChange} value={title} maxLength={maxLength} />
        </FormLayout>
    )
}

export default FormTitle;