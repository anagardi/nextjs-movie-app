import FormLayout from "../form-layout";
import { Button, Box, OutlinedInput, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

function FormDirectors(props) {

  return (
        <FormLayout title="Actors:">

            {
                props.actors?.map((actor, i) => (
                    <Box key={i} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", columnGap: "5px", width: "100%" }}>
                        <OutlinedInput placeholder="Enter actor name" value={actor} sx={{ width: "100%" }} onChange={(e) => { props.onChange(props.actors.indexOf(actor), e.target.value) }} />
                        <IconButton aria-label="delete" size="large" color="primary" style={{ borderRadius: 0 }}
                            onClick={() => { props.onDelete(props.actors.indexOf(actor)) }}>
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