import React, { useState } from "react"
import OutlinedInput from '@mui/material/OutlinedInput'
import FormLayout from "../../form-layout";
import { Button, Box, Typography } from "@mui/material";

function Poster(props) {

    const fake_url = "https://picsum.photos/200/300";

    const [poster_url, setPoster_url] = useState(props.poster_url);

    function handleFakeUrlProviderClick() {
        setPoster_url(fake_url);
    }

    function isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (err) {
            return false;
        }
    }

    function handleBlur() {
        !isValidUrl(poster_url) && setPoster_url(fake_url);
    }

    return (
        <FormLayout title="Poster URL:">

            <OutlinedInput
                name="poster_url"
                placeholder="Enter movie's poster url"
                value={poster_url}
                onChange={(event) => { setPoster_url(event.target.value) }}
                onBlur={handleBlur} />

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "15px",
                }}
            >
                <Button
                    sx={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        background: "transparent",
                        border: "none",
                        color: "text.secondary",
                        fontStyle: "italic",
                        minWidth: "fitContent"
                    }}
                    onClick={handleFakeUrlProviderClick} >I feel lucky!</Button>
                <Typography fontSize="10pt">*Use this feature if you don't have an image URL in hand!</Typography>
            </Box>
        </FormLayout>
    );
}

export default Poster;