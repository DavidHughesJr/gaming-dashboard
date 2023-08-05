import { PanoramaSharp } from '@mui/icons-material';
import { Box, Stack, Unstable_Grid2 as Grid, Typography, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';


export default function Content({ title, listing }) {

    let params = useParams()

    return (

        <Box mt={5} sx={{ flexGrow: 1 }} >
            <Typography mb={3} variant='h2'> {title ? title : params.name.charAt(0).toUpperCase() + params.name.slice(1)} </Typography>
            <Grid container spacing={2} justifyContent='center' columns={{ xs: 3, sm: 8, md: 8, lg: 12, xl: 16, xxl: 20 }}>
                {listing?.results?.map((item, index) => (
                    <Grid xs={2} sm={4} md={4} key={index}>
                        <Card sx={{ backgroundColor: '#2f3137' }}>
                            <CardMedia
                                sx={{ height: 250 }}
                                image={item.background_image}
                                title={item.slug}
                            />
                            <CardContent>
                                <Typography mb={2} variant='h5'>
                                    {item?.name}
                                </Typography>
                                <Stack direction='row' justifyContent='space-between'>
                                    <Typography variant="subtitle2">
                                        {item.esrb_rating?.name}
                                    </Typography>
                                    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                                        <CircularProgress variant="determinate" value={item?.metacritic} />
                                        <Box
                                            sx={{
                                                top: 0,
                                                left: 0,
                                                bottom: 0,
                                                right: 0,
                                                position: 'absolute',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Typography variant="caption" component="div">
                                                {item?.metacritic}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Stack>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>

    )
}