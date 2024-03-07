import React, { useState } from "react"
import FormLayout from "../form-layout"
import OutlinedInput from '@mui/material/OutlinedInput'

function Plot(props) {

    const [plot, setPlot] = useState(props.plot);

    return (
        <FormLayout title="Plot:">
            <OutlinedInput name="plot" placeholder="Enter movie's short description" value={plot} onChange={(event) => {setPlot(event.target.value)}} multiline />
        </FormLayout>
    );
}

export default Plot;