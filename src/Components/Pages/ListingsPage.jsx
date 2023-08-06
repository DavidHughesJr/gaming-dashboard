import Content from "../common/Content"
import { useParams } from "react-router-dom"

function GenrePage() {

    const params = useParams()

    console.log(params)

    return (
        <>
            hello
            <Content />
        </>
    )
}

export default GenrePage