import { Box, Typography } from "@mui/material"

export default function FormLayout({title, children}) {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", mt: "15px" }}>
            <Typography variant="h6" fontWeight={800}>{title}</Typography>
            {children}
        </Box>
    )
}