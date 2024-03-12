import Layout from "../components/layout"
import Card from '@mui/material/Card'
import CardActionArea from "@mui/material/AccordionActions"
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { List, ListItem, ListItemText } from '@mui/material'


export default function About() {
    return (
        <Layout title="About Us" subtitle="We are passionate about the magic of movies...">

            <Card sx={{ m: "40px 25% 40px 25%",  width: "50%", maxWidth: "50%", alignSelf: "center" }}>
                <CardMedia
                height="170"
                    component="img"
                    image={"/static/images/aboutus.jpeg"}
                    alt="Light bulbs on blue background image" />
                <CardActionArea>
                    <CardContent sx={{p: "40px"}}>

                        <Typography mb="25px" gutterBottom variant="h5" component="div" fontWeight="900" textAlign="center">
                            Welcome to MovieFaker!
                        </Typography>

                        <Typography variant="body1" color="text.secondary" textAlign="justify">
                            At MovieFaker, we understand the thrill of escaping reality and diving into the world of make-believe. Our mission is to bring you an unparalleled experience of cinematic wonder, providing a platform where creativity knows no bounds.
                        </Typography>

                        <Typography mt="25px" gutterBottom variant="h5" component="div" fontWeight="900" textAlign="justify">
                            Who We Are
                        </Typography>

                        <Typography variant="body1" color="text.secondary" textAlign="justify">
                            MovieFaker is a haven for dreamers, storytellers, and those who seek a break from the ordinary. We are a team of passionate individuals with a shared love for the magic of movies and the art of fabrication. Our goal is to transport you to worlds that exist only in the realms of fantasy, allowing you to explore the extraordinary and experience the impossible.
                        </Typography>

                        <Typography mt="25px" gutterBottom variant="h5" component="div" fontWeight="900" textAlign="justify">
                            What We Do
                        </Typography>

                        <Typography variant="body1" color="text.secondary" textAlign="justify">
                            Immerse yourself in our extensive catalog of fictional movie listings, each crafted with care and attention to detail. From outlandish plots to jaw-dropping special effects, our films push the boundaries of imagination. Whether you're in the mood for epic adventures, heartwarming romances, or mind-bending mysteries, MovieFaker has something for every taste.
                        </Typography>

                        <Typography mt="25px" gutterBottom variant="h5" component="div" fontWeight="900" textAlign="justify">
                            Why Choose MovieFaker?
                        </Typography>

                        <List sx={{ listStyle: "decimal", pl: 4 }}>
                            <ListItem sx={{ display: "list-item", textAlign: "justify"}}>
                                <ListItemText primary="Unlimited Creativity: Our team of talented storytellers and designers work tirelessly to create unique and captivating movie concepts that defy reality." />
                            </ListItem>
                            <ListItem sx={{ display: "list-item", textAlign: "justify" }}>
                                <ListItemText primary="Endless Variety: With a diverse range of genres and themes, MovieFaker ensures there's always something new and exciting for everyone." />
                            </ListItem>
                            <ListItem sx={{ display: "list-item", textAlign: "justify" }}>
                                <ListItemText primary="Endless Variety: With a diverse range of genres and themes, MovieFaker ensures there's always something new and exciting for everyone." />
                            </ListItem>
                        </List>

                        <Typography mt="25px" gutterBottom variant="h5" component="div" fontWeight="900" textAlign="justify">
                            Join Us on the Journey
                        </Typography>

                        <Typography variant="body1" color="text.secondary" textAlign="justify">
                            At MovieFaker, we invite you to embark on a journey beyond the ordinary. Unleash your imagination, suspend disbelief, and let the magic of fake movies transport you to places you've only dreamed of. Whether you're a casual moviegoer or a dedicated cinephile, MovieFaker is here to redefine your perception of what's possible on the silver screen.
                        </Typography>

                        <Typography mt="25px" variant="body1" color="text.secondary" textAlign="justify">
                            Thank you for choosing MovieFaker – where the unreal becomes real, if only for a moment.
                        </Typography>

                    </CardContent>
                </CardActionArea>
            </Card>

        </Layout>
    )
}