import Content from "../common/Content"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import rawgApi, { dates, order } from "../api/rawgConfig";


function GenrePage() {

    const [genreData, setGenreData] = useState([])

    const {genre}  = useParams()

    useEffect(() => {

        const getGamesData = async () => {
            const resGenre = await rawgApi.getGamesByGenre(genre, order.added)
            const genreData = await resGenre.json()
            setGenreData(genreData)
        }
        getGamesData()

    }, [genre])

    console.log(genre)


    return (
        <>
            <Content listing={genreData} />
        </>
    )
}

export default GenrePage