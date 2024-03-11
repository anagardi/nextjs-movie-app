import { Box, Typography } from "@mui/material"

export default function FormLayout({title, children}) {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "5px", mt: "15px", mb: "5px", width: "100%" }}>
            <Typography variant="h6" fontWeight={800}>{title}</Typography>
            {children}
        </Box>
    )
}