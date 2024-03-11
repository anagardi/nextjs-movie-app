// import React, {useState} from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import dayjs from 'dayjs'
import FormLayout from "../../form-layout"

function FormYear(props) {

    return (
        <FormLayout title="Released in:" >
            <DatePicker openTo="year" views={["year"]}
                onChange={(newValue) => {
                    console.log(newValue)
                    props.onChange(newValue)
                }}
                value={dayjs(props.year === "" ? "" : new Date(props.year, null))}
            />
        </FormLayout>
    )
}

export default FormYear;