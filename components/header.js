import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import ToolbarMenu from "./toolbar-menu";

function Header() {

    const pathname = usePathname()

    return (
        <AppBar position="static">
            <Toolbar disableGutters={true}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: "25px",
                    minWidth: "400px",
                }}
            >
                <Logo />
                <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }, flexGrow: 1, justifyContent: 'flex-end' }}>

                    <Link href="/">
                        <Button
                            color="inherit"
                            sx={{ bgcolor: pathname === "/" ? "secondary.main" : "" }}
                        >Home
                        </Button>
                    </Link>

                    <Link href="/movie/add">
                        <Button
                            color="inherit"
                            sx={{ bgcolor: pathname === "/movie/add" ? "secondary.main" : "" }}
                        >
                            Add Movie
                        </Button>
                    </Link>
                    <Link href="/about">
                        <Button
                            color="inherit"
                            sx={{ bgcolor: pathname === "/about" ? "secondary.main" : "" }}
                        >
                            About Us
                        </Button>
                    </Link>
                    <Link href="/contacts">
                        <Button
                            color="inherit"
                            sx={{ bgcolor: pathname === "/contacts" ? "secondary.main" : "" }}
                        >
                            Contacts
                        </Button>
                    </Link>
                </Box>
                <ToolbarMenu />
            </Toolbar>
        </AppBar>
    )
}

export default Header;