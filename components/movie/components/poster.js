import OutlinedInput from "@mui/material/OutlinedInput"
import FormLayout from "../../form-layout"
import { Button, Box, Typography } from "@mui/material"


export default function Poster(props) {

    const fake_url = "https://picsum.photos/200/300";

    function isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (err) {
            return false;
        }
    }

    return (
        <FormLayout title="Poster URL:">

            <OutlinedInput
                id="poster_url"
                placeholder="Enter movie's poster url"
                value={props.poster}
                onChange={(event) => { props.onChange(event.target.value) }}
                onBlur={(event) => { !isValidUrl(event.target.value) && props.onChange(fake_url) }}
            />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-start",
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
                    onClick={() => { props.onChange(fake_url)}}
                >
                    I feel lucky!
                </Button>
                <Typography fontSize="10pt">*Use this feature if you don't have an image URL in hand!</Typography>
            </Box>

        </FormLayout>
    );
}