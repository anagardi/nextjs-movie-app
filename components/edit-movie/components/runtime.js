import React, { useState } from "react"
import FormLayout from "../../form-layout"
import OutlinedInput from '@mui/material/OutlinedInput'



function FormRuntime(props) {

    const [runTime, setRunTime] = useState(props.runtime);

    return (
        <FormLayout title="Duration:" >

            <OutlinedInput name="runtime" type='number'
                placeholder="Enter movie's duration in minutes"
                value={runTime}
                onChange={(event) => { setRunTime(event.target.value) }} />
        </FormLayout>
    )
}

export default FormRuntime;