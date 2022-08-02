import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import SchoolIcon from '@mui/icons-material/School'
import { Button, Grid, Link, Stack, Typography } from "@mui/material"
import { Box, width } from "@mui/system"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import avatar from "../assets/avatar.jpg"
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';

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
        <Stack spacing={2} direction="column">
            <Stack ml={2} direction="column">
                <Typography mt={2} variant="subtitle2" gutterBottom color="#03adfc">
                    BIOGRAPHY
                </Typography>
                <Typography variant="h4" fontWeight={"600"}>
                    About Me
                </Typography>
            </Stack>
            <Stack direction="row">
                <Box
                    sx={{
                        width: 500,
                        height: 500,
                        backgroundColor: 'primary.dark',
                        '&:hover': {
                            backgroundColor: 'primary.main',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                >
                    <img style={{ maxWidth: "100%" }} src={avatar} alt="avatar" />
                </Box>
                <Stack pl={2} spacing={2} direction="column">
                    <Typography variant="h3" fontWeight={"600"}>
                        I'm Sang Bui
                    </Typography>
                    <Typography sx={{
                        width: 520,
                        textAlign: "justify",
                        lineHeight: 2
                    }}>
                        Hi! My name is Sang Bui. I am a Web Developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success.
                    </Typography>
                    <Stack >
                        <Box sx={{
                            width: 550,
                            backgroundColor: 'primary.dark',
                        }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <CalendarMonthIcon fontSize="large" color="info" />
                                        <Typography fontWeight={600}>
                                            Birthday:
                                        </Typography>
                                        <Typography>
                                            20-05-1995
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid container item xs={6}>
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <ShareLocationIcon fontSize="large" color="info" />
                                        <Typography fontWeight={600}>
                                            Location:
                                        </Typography>
                                        <Typography>
                                            Ba Ria - Vung Tau
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={6}>
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <SchoolIcon fontSize="large" color="info" />
                                        <Typography fontWeight={600}>
                                            Study:
                                        </Typography>
                                        <Typography>
                                            UIT HCM
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={6}>
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <LocalPhoneIcon fontSize="large" color="info" />
                                        <Typography fontWeight={600}>
                                            Phone:
                                        </Typography>
                                        <Typography>
                                            (+84) 985515422
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={6}>
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <EmailIcon fontSize="large" color="info" />
                                        <Typography fontWeight={600}>
                                            Email:
                                        </Typography>
                                        <Typography>
                                            sangbuinhu@gmail.com
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={6}>
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <FacebookIcon fontSize="large" color="info" />
                                        <Typography fontWeight={600}>
                                            Facebook:
                                        </Typography>
                                        <Typography>
                                            <Link href="https://www.fb.com/shinn.ns" underline="none" target="_blank">Sang Bui</Link>
                                        </Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>
                    </Stack>
                    <Button variant="contained" sx={{
                        width: 200,
                        height: 45,
                        borderRadius: 0
                    }}>Download CV</Button>
                </Stack>
            </Stack>
        </Stack >
    )
}

export default Home