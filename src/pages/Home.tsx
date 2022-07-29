import { Stack, Button } from "@mui/material"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

type Props = {}

const Home = (props: Props) => {
    const [count, setCount] = useState<string[]>([])

    const navigate = useNavigate();

    useEffect(() => {
        // setCount([...count, "gass"])
    }, [])

    useEffect(() => {
        console.log("object", count);
    }, [count])

    const plusCount = () => {
        setCount([...count, "gass"])
        navigate("/books")
    }
    return (
        <Stack spacing={2} direction="row">
            <Stack spacing={2} direction="column">
                {count.map((item, index) => (
                    <Button key={index}>
                        {item}
                    </Button>
                ))}

            </Stack>
            <Button variant="text" onClick={plusCount}>Text</Button>
            <Link to={"/books"}>books</Link>

        </Stack>
    )
}

export default Home