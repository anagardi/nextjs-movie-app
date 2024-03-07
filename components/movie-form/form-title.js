import OutlinedInput from '@mui/material/OutlinedInput'
import FormLayout from "../form-layout";

function FormTitle(props) {

    const maxLength = 255;

    return (
        <FormLayout title="Title:">
            <OutlinedInput name="title" placeholder="Enter movie title" onChange={(e) => props.onChange(e.target.value)} value={props.title} maxLength={maxLength} />
        </FormLayout>
    )
}

export default FormTitle;