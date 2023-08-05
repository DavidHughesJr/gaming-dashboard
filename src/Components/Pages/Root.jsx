import { useEffect, useState } from "react";
import rawgApi from "../Api/rawgConfig";
import { Box, Container, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import TopNav from '../Common/TopNav'
import SideNav from '../Common/SideNav'

export default function Root() {


    const [genres, setGenres] = useState([]);

    

    useEffect(() => {

        const fetchGenres = async () => {
            const resGenres = await rawgApi.getGenres()
            const genresData = await resGenres.json()
            setGenres(genresData.results)
        }
        fetchGenres()
    }, [])



    return (
        <>
            <TopNav genres={genres} />
            <Container maxWidth='xxl'>
                <Stack flexDirection={{ md: "row", sm: "column" }} justifyContent='space-between'>
                    <Box width={{ xs: '100%', md: '30%', lg: '20%', xl: '15%' }} mr={5}>
                        <SideNav genres={genres} />
                    </Box>
                    <Box width={{ xs: '100%', md: '70%', lg: '80%', xl: '85%' }}>
                        <Outlet />
                    </Box>
                </Stack>
            </Container>
        </>

    )
}