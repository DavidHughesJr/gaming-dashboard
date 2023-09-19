import { useRouteError } from "react-router-dom";
import { Stack, Box, Typography, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";


export const ErrorBoundary = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <Container maxWidth="lg">
            <Stack justifyContent='center' alignItems='center' pt={20}>
                <Box>
                    <Typography variant="h1">
                        404
                    </Typography>
                    <Typography mb={2} variant="h6">
                        The page you’re looking for doesn’t exist.
                    </Typography><Typography variant="h6">
                    </Typography>
                    <Button component={Link} to={'/'} variant="contained">Back Home</Button>
                </Box>
            </Stack>
        </Container>
    )
}
