import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import dayjs from 'dayjs'
import FormLayout from "../../form-layout"
import { Box } from "@mui/material";

function FormYear(props) {

    return (
        <FormLayout title="Released in:" >
            <Box width="100%">
                <DatePicker id="year" openTo="year" views={["year"]}
                    sx={{ width: "100%" }}
                    value={dayjs(props.year === "" ? "" : new Date(props.year, null))}
                    onChange={(newValue) => props.onChange(newValue)} />
            </Box>
        </FormLayout>
    )
}

export default FormYear;