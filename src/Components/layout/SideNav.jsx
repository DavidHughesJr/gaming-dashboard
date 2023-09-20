import { Link } from 'react-router-dom';
import { Box, MenuList, Typography, MenuItem, ListItemText, ListItemIcon } from '@mui/material';
import { Today, Whatshot, CalendarMonth } from '@mui/icons-material';


export default function SideNav({ genres }) {

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

    const games = ['All Games','Popularity', 'Top Rated']

    const releases = ['New Releases']
    const releaseIcons = [<Today />, <CalendarMonth />]


    return (
        <Box p={4} display={{ xs: 'none', md: 'block' }}>
            <Typography variant='h5' pb={10} > GameBase </Typography>
            <MenuList>
                <Link underline="none" color='white'> <Typography variant='h5' fontWeight='bold' > Home </Typography> </Link>
                {
                    games?.map((game, i) => <NavLink key={games.length} icon={<Whatshot />} title={games[i]} link={`games/${game.replace(' ', '-').toLocaleLowerCase()}`} />)
                }
                <Typography variant='h5' pt={2} fontWeight='bold'> New Releases </Typography>
                {
                    releases?.map((releases, i) => <NavLink key={releases.length} icon={releaseIcons[i]} title={releases} link={`releases/${releases.replace(' ', '-').toLocaleLowerCase()}`} />)
                }
                <NavLink icon={<Today />} title={'Next 7 Days'} link={'releases/this-week'} />
                <NavLink icon={<CalendarMonth />} title={'Next 30 Days'} link={'/this-month'} />
                <NavLink icon={<CalendarMonth />} title={'This Year'} link={'/this-year'} />
                <Typography variant='h5' pt={2} fontWeight='bold'> Top Charts </Typography>
                <NavLink icon={<Today />} title={'This Week'} link={'/this-week'} />
                <NavLink icon={<CalendarMonth />} title={'Last Month'} link={'/last-month'} />
                <NavLink icon={<CalendarMonth />} title={'Last Year'} link={'/last-year'} />
                <Typography variant='h5' pt={2} fontWeight='bold'> Genre </Typography>
                {
                    genres?.map((genre) => <NavLink key={genre.name} icon={<> <img className='genreIcons' src={genre.image_background} alt='img' />  </>} title={genre.name} link={`games/${genre.slug}`} />)
                }
            </MenuList>
        </Box>
    );
}