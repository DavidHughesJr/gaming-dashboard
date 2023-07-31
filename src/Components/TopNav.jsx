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

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'white',
        backgroundColor: '#2f3137',
        padding: '5px',
        borderRadius: '10px',
        '& .MuiInputBase-input': {
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '22rem',
                '&:focus': {
                    width: '23rem',
                },
            },
        },
    }));


    return (
        <Box mt={2} >
                <Toolbar >
                    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="white"
                            aria-label="open drawer"
                            sx={{ mr: 2, color: 'white' }}
                        >
                            <Menu />

                        </IconButton>
                    </Box>
                    <Stack mr={1} width='100%' direction='row' justifyContent='space-between' alignItems='center'>
                        <SportsEsports sx={{color: 'white'}} />
                    <Stack sx={{ backgroundColor: '#2f3137', color: 'white', paddingLeft: '5px', borderRadius: '5px' }} direction='row' justifyContent='center' alignItems='center'>
                            <Search />
                            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }}
                            />
                        </Stack>
                    </Stack>
                </Toolbar>
          
        </Box >
    );
}