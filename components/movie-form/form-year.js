import React, { useState } from "react"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import dayjs from 'dayjs'
import FormLayout from "../form-layout"

function FormYear(props) {

    const [year, setYear] = useState(props.year === "" ? "" : new Date(props.year, null));

    return (
        <FormLayout title="Released in:" >
            <DatePicker openTo="year" views={["year"]} onChange={(newValue) => setYear(newValue)} value={dayjs(year)} />
        </FormLayout>
    )
}

export default FormYear;