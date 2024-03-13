import Layout from "../components/layout"
import Card from '@mui/material/Card'
import CardActionArea from "@mui/material/AccordionActions"
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import Link from 'next/link'

export default function Contacts() {
    return (
        <Layout
            title="Contact Us"
            subtitle="Get in Touch: Your Thoughts Matter, Our Response Sparkles!">

            <Box sx={{ mt: "10%", display: "flex", gap: "40px", alignItems: "center", justifyContent: "center" }}>

                <Card sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "250px",
                    width: "250px",
                    alignContent: "center",
                    alignItems: "center",
                    pt: "40px",
                    pb: "40px"
                }}>
                    <CardMedia
                        height="70"
                        width="70"
                        component="img"
                        image={"/static/images/address.png"}
                        alt="Address logo image"
                        sx={{ objectFit: "contain" }} />
                    <CardContent sx={{}} >
                        <Typography gutterBottom variant="body1" fontWeight="900">Some street 00</Typography>
                        <Typography gutterBottom variant="body1" fontWeight="900">9999AB City</Typography>
                        <Typography gutterBottom variant="body1" fontWeight="900">COUNTRY</Typography>
                    </CardContent>
                </Card>

                <Card sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "250px",
                    width: "250px",
                    alignContent: "center",
                    alignItems: "center",
                    pt: "40px",
                    pb: "40px"
                }}>
                    <CardMedia
                        height="70"
                        width="70"
                        component="img"
                        image={"/static/images/phone.png"}
                        alt="Phone logo image"
                        sx={{ objectFit: "contain" }} />
                    <CardContent >
                        <Typography gutterBottom variant="body1" fontWeight="900">31 (6) 12345678</Typography>
                        <Typography gutterBottom variant="body1" fontWeight="900">31 (5) 12345678</Typography>
                    </CardContent>
                </Card>

                <Card sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "250px",
                    width: "250px",
                    alignContent: "center",
                    alignItems: "center",
                    pt: "40px",
                    pb: "40px"
                }}>
                    <CardMedia
                        height="70"
                        width="70"
                        component="img"
                        image={"/static/images/email.png"}
                        alt="Email logo image"
                        sx={{ objectFit: "contain" }} />
                    <CardContent >
                        <Link href="mailto:name.surname@gmail.com">
                            <Typography gutterBottom variant="body1" fontWeight="900">name.surname@gmail.com</Typography>
                        </Link>
                    </CardContent>
                </Card>

                <Card sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "250px",
                    width: "250px",
                    alignContent: "center",
                    alignItems: "center",
                    pt: "40px",
                    pb: "40px"
                }}>
                    <CardMedia
                        height="70"
                        width="70"
                        component="img"
                        image={"/static/images/web.png"}
                        alt="Web logo image"
                        sx={{ objectFit: "contain" }} />
                    <CardContent >
                        <Link href="https://www.somewebpage.com" target="_blank" rel="noreferrer">
                            <Typography gutterBottom variant="body1" fontWeight="900">www.somewebpage.com</Typography>
                        </Link>
                    </CardContent>
                </Card>
            </Box>

        </Layout>
    )
}