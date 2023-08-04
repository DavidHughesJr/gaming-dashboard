import * as React from 'react';
import {
    Box, IconButton, Link, Toolbar,
    Button,
    InputBase,
    Stack,
    styled,
    ListItemText,
    MenuItem,
    Typography
} from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Today, Whatshot, CalendarMonth, Menu, Search, SportsEsports, Favorite } from '@mui/icons-material';


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
                width: '15rem',
                '&:focus': {
                    width: '16rem',
                },
            },
            [theme.breakpoints.up('lg')]: {
                width: '40rem',
                '&:focus': {
                    width: '41rem',
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
                        sx={{ color: 'white' }}
                    >
                        <Menu />

                    </IconButton>
                </Box>
                <Stack mr={1} gap={1} width='100%' direction='row' justifyContent='space-between' alignItems='center'>
                    <SportsEsports sx={{ color: 'white' }} />
                    <Stack sx={{ backgroundColor: '#2f3137', color: 'white', paddingLeft: '5px', borderRadius: '5px' }} direction='row' justifyContent='center' alignItems='center'>
                        <Search />
                        <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }}
                        />
                    </Stack>
                    <Stack flexDirection='row' alignItems='center' gap={2}>
                        <Button variant='contained'>
                            <Typography pr={1} variant='subtitle'> Saves </Typography>
                           <Favorite />
                        </Button>                        
                    </Stack>
                </Stack>
            </Toolbar>

        </Box >
    );
}