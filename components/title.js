import { Box, Typography } from "@mui/material"
import styles from "../styles/title.module.css"

export default function Title({ title, subtitle }) {

    return (
        <Box className={styles.title_box}>
            <Typography variant="h3">{title}</Typography>
            <Typography variant="subtitle1">{subtitle}</Typography>
        </Box>
    )
}