import { Box, Stack, Container, Unstable_Grid2 as Grid, Typography, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';

export default function Content({ gamesList }) {


    const platformImages = gamesList?.results?.map((item, index) => {
        const platforms = item.platforms
        // platforms.map((item) => item.platform.image_background)
        return (
            item
        )
    })

    console.log(platformImages)



    return (
        <Container maxWidth="xl">
            <Box mt={5} sx={{ flexGrow: 1 }}>
                <Typography mb={3} variant='h4'> Content </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 16, xl: 20 }}>

                    {gamesList?.results?.map((item, index) => (
                        <Grid xs={2} sm={4} md={4} key={index}>
                            <Card sx={{ maxWidth: 345, backgroundColor: '#2f3137' }}>
                                <CardMedia
                                    sx={{ height: 200 }}
                                    image={item.background_image}
                                    title={item.slug}
                                />
                                <CardContent>
                                    <Typography mb={2} variant='h5'>
                                        {item.name}
                                    </Typography>
                                    <Stack direction='row' justifyContent='space-between'>
                                        <Typography variant="subtitle2">
                                            {item.esrb_rating.name}
                                        </Typography>
                                        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                                            <CircularProgress variant="determinate" value={item.metacritic} />
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
                                                    {item.metacritic}
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
        </Container>
    )
}