import FormLayout from "../../form-layout"
import OutlinedInput from '@mui/material/OutlinedInput'

export default function Plot(props) {

    return (
        <FormLayout title="Plot:">
            <OutlinedInput name="description"
                placeholder="Enter movie's short description"
                value={props.plot} onChange={(event) => { props.onChange(event.target.value) }} multiline />
        </FormLayout>
    );
}