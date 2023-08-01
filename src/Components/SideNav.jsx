import * as React from 'react';
import {
    AppBar, Box, IconButton, Link, Toolbar,
    MenuList,
    InputBase,
    Stack,
    styled
} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import { Today, Whatshot, CalendarMonth, Menu, Search, SportsEsports } from '@mui/icons-material';


export default function Navigation() {

    const NavLink = ({ icon, title, link }) => {
        return (
            <MenuItem
                component={Link}
                to={link}
            >
                <ListItemIcon sx={{ color: 'white' }}>
                    {icon}
                </ListItemIcon>
                <ListItemText> {title} </ListItemText>
            </MenuItem>
        )
    }

    return (
        <Box p={4} display={{ xs: 'none', md: 'block' }}>
            <Typography variant='h5' pb={10} > GameBase </Typography>
            <MenuList>
                <Link underline="none" color='white'> <Typography variant='h5' fontWeight='bold' > Home </Typography> </Link>
                <NavLink icon={<Whatshot />} title={'Trending'} link={'/home'} />
                <Typography variant='h5' pt={2} fontWeight='bold'> New Releases </Typography>
                <NavLink icon={<Today />} title={'This Week'} link={'/home'} />
                <NavLink icon={<CalendarMonth />} title={'Next 30 Days'} link={'/home'} />
                <Typography variant='h5' pt={2} fontWeight='bold'> Genre </Typography>
                <NavLink icon={''} title={'Action'} link={'/home'} />
                <NavLink icon={''} title={'RpG'} link={'/home'} />
                <NavLink icon={''} title={'Racing'} link={'/home'} />
            </MenuList>
        </Box>
    );
}