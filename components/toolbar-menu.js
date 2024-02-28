import * as React from 'react';
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { usePathname } from 'next/navigation'
import Link from 'next/link';

export default function ToolbarMenu() {

    const pathname = usePathname();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 0 }}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' } }}                        >
                <MenuIcon />
            </IconButton>

            <Menu
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Link href="/">
                    <MenuItem
                        onClick={handleClose}
                        // sx={{ bgcolor: pathname === "/" ? "secondary.main" : "" }}
                    >
                        Home
                    </MenuItem>
                </Link>
                <Link href="/movie/add">
                    <MenuItem
                        onClick={handleClose}
                        // sx={{ bgcolor: pathname === "/movie/add" ? "secondary.main" : "" }}
                    >
                        Add
                    </MenuItem>
                </Link>
                <Link href="/about">
                    <MenuItem
                        onClick={handleClose}
                        // sx={{ bgcolor: pathname === "/about" ? "secondary.main" : "" }}
                    >
                        About Us
                    </MenuItem>
                </Link>
                <Link href="contacts">
                    <MenuItem
                        onClick={handleClose}
                        // sx={{ bgcolor: pathname === "/contacts" ? "secondary.main" : "" }}
                    >
                        Contacts
                    </MenuItem>
                </Link>
            </Menu>
        </Box>
    );
}
