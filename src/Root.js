import { Box, Container, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import TopNav from './Components/TopNav'
import SideNav from './Components/SideNav'

export default function Root() {
    return (
        <>
            <TopNav />
            <Container maxWidth='xxl'>
                <Stack flexDirection={{ md: "row", sm: "column" }} justifyContent='space-between'>
                    <Box width={{ xs: '100%', md: '20%', xl: '15%' }} mr={5}>
                        <SideNav />
                    </Box>
                    <Box width={{ xs: '100%', md: '80%', xl: '85%' }}>
                        <Outlet />
                    </Box>
                </Stack>
            </Container>
        </>

    )
}