import FormLayout from "../../form-layout";
import { Button, Box, OutlinedInput, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

function FormDirectors(props) {

    return (
        <FormLayout title="Directors:">

            {
                props.directors?.map((director, i) => (
                    <Box key={i} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", width: "100%", mb: "5px" }}>
                        <OutlinedInput name={`director${i}`} placeholder="Enter director name" value={director} sx={{ width: "100%" }} onChange={(e) => { props.onChange(props.directors.indexOf(director), e.target.value) }} />
                        <IconButton aria-label="delete" size="large" color="primary" sx={{ borderRadius: "0", p: "0" }}
                            onClick={() => { props.onDelete(props.directors.indexOf(director)) }}>
                            <DeleteIcon fontSize="large" />
                        </IconButton>
                    </Box>
                ))
            }
            <Box sx={{ display: "flex", width: "100%", justifyContent: "center", mt: "20px" }}>
                <Button variant="contained" sx={{ backgroundColor: "primary.light", width: "100px" }} onClick={() => { props.onAdd() }}>Add</Button>
            </Box>
        </FormLayout >
    );
}

export default FormDirectors;