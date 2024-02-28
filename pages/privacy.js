import Layout from "../components/layout";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardActionArea from "@mui/material/AccordionActions";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from "next/link"
import { Divider } from "@mui/material";

export default function PrivacyPolicy() {
    return (
        <Layout
            title="Privacy Policy"
            subtitle="Our Privacy Matters: Exploring the Fictional Realm Safely!">

            <Card sx={{ m: "25px 25% 25px 25%", p: "25px", width: "50%", maxWidth: "50%", alignSelf: "center" }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={"/static/images/privacy.png"}
                    alt="privacy policy" />
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="body1" component="div" fontWeight="900" textAlign="justify">
                            Last updated: February 08, 2024
                        </Typography>
                        <Typography gutterBottom variant="body1" component="div" fontWeight="900" textAlign="justify">
                            We operate www.somewebpage.com (the "Service").
                        </Typography>

                        <Typography mt="25px" gutterBottom variant="h5" component="div" fontWeight="900" textAlign="justify">
                            Information Collection
                        </Typography>
                        <Typography variant="body1" color="text.secondary" textAlign="justify">
                            We collect user-provided content for creating and interacting with fictional content on our Movie Faker Service.
                        </Typography>

                        <Typography mt="25px" gutterBottom variant="h5" component="div" fontWeight="900" textAlign="justify">
                            Usage Data
                        </Typography>

                        <Typography variant="body1" gutterBottom color="text.secondary" textAlign="justify">
                            We may collect information on how the Movie Faker Service is accessed and used. We may share this information for statistical analysis and website improvement.
                        </Typography>

                        <Typography mt="25px" gutterBottom variant="h5" component="div" fontWeight="900" textAlign="justify">
                            Your Consent
                        </Typography>

                        <Typography variant="body1" gutterBottom color="text.secondary" textAlign="justify">
                            By using our service, you agree to the terms of this privacy policy.
                        </Typography>

                        <Typography mt="25px" gutterBottom variant="h5" component="div" fontWeight="900" textAlign="justify">
                            Contact Us
                        </Typography>

                        <Typography variant="body1" gutterBottom color="text.secondary" textAlign="justify">
                            If you have any questions or concerns about our Privacy Policy, please contact us at <Link href="/contacts"><Box component="span" sx={{ color: "inherit", fontWeight: "900" }}>Contacts</Box></Link> page.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        </Layout>
    );
}