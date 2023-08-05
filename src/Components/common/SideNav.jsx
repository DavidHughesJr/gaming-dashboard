import { Link } from 'react-router-dom';
import { Box, MenuList, Typography, MenuItem, ListItemText, ListItemIcon } from '@mui/material';
import { Today, Whatshot, CalendarMonth } from '@mui/icons-material';


export default function SideNav({ genres }) {

    console.log(genres.map((genre) => genre))

    const NavLink = ({ icon, title, link }) => {
        return (
            <MenuItem
                component={Link}
                to={link}
            >
                <ListItemIcon sx={{ color: 'white', paddingRight: .5 }}>
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
                <NavLink icon={<Whatshot />} title={'All Games'} link={'/'} />
                <NavLink icon={<Whatshot />} title={'Popular'} link={'/popular'} />
                <NavLink icon={<Whatshot />} title={'Top Rated'} link={'/top-rated'} />
                <Typography variant='h5' pt={2} fontWeight='bold'> New Releases </Typography>
                <NavLink icon={<Today />} title={'Next 7 Days'} link={'/this-week'} />
                <NavLink icon={<CalendarMonth />} title={'Next 30 Days'} link={'/this-month'} />
                <NavLink icon={<CalendarMonth />} title={'This Year'} link={'/this-year'} />
                <Typography variant='h5' pt={2} fontWeight='bold'> Top Charts </Typography>
                <NavLink icon={<Today />} title={'This Week'} link={'/this-week'} />
                <NavLink icon={<CalendarMonth />} title={'Last Month'} link={'/last-month'} />
                <NavLink icon={<CalendarMonth />} title={'Last Year'} link={'/last-year'} />
                <Typography variant='h5' pt={2} fontWeight='bold'> Genre </Typography>
                {
                    genres?.map((genre) => <NavLink icon={<> <img className='genreIcons' src={genre.image_background} alt='img' />  </>} title={genre.name} link={`genre/${genre.slug}`} />)
                }
            </MenuList>
        </Box>
    );
}