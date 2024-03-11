import { Box } from "@mui/material";
import FormLayout from "../../form-layout"
import OutlinedInput from '@mui/material/OutlinedInput'



function FormRuntime(props) {

    return (
        <FormLayout title="Duration:" >
            <Box width="100%">
                <OutlinedInput id="runtime" type='number'
                    sx={{ width: "100%" }}
                    placeholder="Enter movie's duration in minutes"
                    value={props.runtime}
                    onChange={(e) => props.onChange(e.target.value)} />
            </Box>
        </FormLayout>
    )
}

export default FormRuntime;