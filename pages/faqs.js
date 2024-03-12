import Layout from "../components/layout"
import Card from '@mui/material/Card'
import CardActionArea from "@mui/material/AccordionActions"
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { List, ListItem, ListItemText } from '@mui/material'

export default function FAQ() {
    return (
        <Layout
            title="Frequently Asked Questions"
            subtitle="Unveiling Answers, Clearing the Path to Understanding!">

            <Card sx={{ m: "40px 25% 40px 25%", width: "50%", maxWidth: "50%", alignSelf: "center" }}>
                <CardMedia
                    height="170"
                    component="img"
                    image={"/static/images/faq.jpeg"}
                    alt="Light blue squares image" />
                <CardActionArea>
                    <CardContent sx={{ p: "40px" }}>



                        <List sx={{ listStyle: "decimal", pl: 4 }}>

                            <ListItem sx={{ display: "list-item", textAlign: "justify" }}>
                                <ListItemText primary="How often is the movie database updated with new releases?"
                                    secondary=" The database is regularly updated to include the latest movie releases and information. New content is added as soon as it becomes available." />
                            </ListItem>

                            <ListItem sx={{ display: "list-item", textAlign: "justify" }}>
                                <ListItemText primary="Can I browse movies by genre or released year?"
                                    secondary="Use the Browse by Genre and Browse by Year options to discover movies tailored to your preferences." />
                            </ListItem>
                            <ListItem sx={{ display: "list-item", textAlign: "justify" }}>
                                <ListItemText primary="How can I report errors or inaccuracies in movie information?"
                                    secondary=" If you notice any errors, please contact our support team through the provided contacts on the website. We appreciate your assistance in maintaining accurate data." />
                            </ListItem>

                            <ListItem sx={{ display: "list-item", textAlign: "justify" }}>
                                <ListItemText primary="Is the movie database accessible on mobile devices?"
                                    secondary="Yes, the movie database is optimized for mobile use. You can access it through your mobile browser." />
                            </ListItem>
                        </List>



                    </CardContent>
                </CardActionArea>
            </Card>
        </Layout>
    );
}