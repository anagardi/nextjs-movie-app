import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from "./logo";
import Divider from '@mui/material/Divider';
import Link from 'next/link';

export default function Footer() {

    const date = new Date();
    const year = date.getFullYear();

    return (

        <AppBar position="relative" color="primary" sx={{ top: 'auto', bottom: 0}}>
            <Toolbar disableGutters={true}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: "35px 25px 0 25px"
                }}
            >
                <Logo />
                <Box sx={{ flexGrow: 1, justifyContent: 'flex-end' }}>

                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                        <Box >
                            <Typography variant="h6" color="text.secondary" fontWeight="900">Quick Links</Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: "space-around",
                                    width: "100%"
                                }}
                            >
                                <Link href="/">
                                    <Typography color="text.secondary">
                                        Home
                                    </Typography>
                                </Link>

                                <Divider
                                    orientation="vertical"
                                    variant='middle'
                                    flexItem
                                    sx={{
                                        // border: "1px solid",
                                        color: "text.secondary",
                                        m: "5px"
                                    }}
                                />

                                <Link href="/movie/add">
                                    <Typography color="text.secondary" >
                                        Add Movie
                                    </Typography>

                                </Link>

                                <Divider
                                    orientation="vertical"
                                    variant='middle'
                                    flexItem
                                    sx={{
                                        // border: "1px solid",
                                        color: "text.secondary",
                                        m: "5px"
                                    }}
                                />

                                <Link href="/about">
                                    <Typography color="text.secondary">
                                        About Us</Typography>
                                </Link>

                                <Divider
                                    orientation="vertical"
                                    variant='middle'
                                    flexItem
                                    sx={{
                                        // border: "1px solid",
                                        color: "text.secondary",
                                        m: "5px"
                                    }}
                                />

                                <Link href="/contacts">
                                    <Typography color="text.secondary" >
                                        Contacts
                                    </Typography>
                                </Link>

                            </Box>
                        </Box>

                        <Box>
                            <Link href="/privacy">
                                <Typography variant="h6" color="text.secondary" fontWeight="900">Privacy Policy</Typography>
                                <Typography color="text.secondary">Privacy Assurance in our Fictional Universe</Typography>
                            </Link>
                        </Box>

                        <Box>
                            <Link href="/faqs">
                                <Typography variant="h6" color="text.secondary" fontWeight="900">FAQs</Typography>
                                <Typography color="text.secondary">Frequently Asked Questions for users</Typography>
                            </Link>
                        </Box>
                    </Box>

                </Box>
            </Toolbar>
            <Box sx={{ p: "0 25px 20px 25px"}}>
                <Divider
                    sx={{
                        color: "text.secondary",
                        width: "100%",
                        pt:"25px"
                    }}
                />
                <Typography pt="15px" color="text.secondary" textAlign="center">Copyright &copy; {year} Faker Movie Site. All rights reserved.</Typography>
            </Box>
        </AppBar>

    );
}