import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SchoolIcon from '@mui/icons-material/School';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import { Button, Grid, Link, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { avatar } from '../components/common/ImageLogo';
import { experiences } from '../components/common/Infomation';

import StackCol from '../components/common/StackCol';
import StackRow from '../components/common/StackRow';

// Import Swiper React components
// Import Swiper styles
import 'swiper/css';
import MPaper from '../components/common/MPaper';
import Skill from './Skill';

type Props = {};


const Home = (props: Props) => {
	// Function will execute on click of button
	const onButtonClick = () => {
		// using Java Script method to get PDF file
		fetch('Bui-Nhu-Sang-Resume.pdf').then(response => {
			response.blob().then(blob => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'Bui-Nhu-Sang-Resume.pdf';
				alink.click();
			});
		});
	};

	return (
		<Stack pt={"100px"}>
			<StackCol spacing={6} alignItems="center">
				<StackRow>
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
					<Stack pl={"20px"}>
						<StackCol spacing={3}>
							<Typography variant="h3" fontWeight={"600"}>
								Hi! I'm Sang Bui
							</Typography>
							<Typography sx={{
								width: 520,
								textAlign: "justify",
								lineHeight: 2,
								fontSize: 18
							}}>
								A Software Engineer, Looking for a suitable place to improve myself.
							</Typography>
							<Stack >
								<Box sx={{
									width: 550,
									backgroundColor: 'primary.dark',
								}}>
									<Grid container spacing={2}>
										<Grid item xs={6}>
											<StackRow alignItems="center" spacing={1}>
												<CalendarMonthIcon fontSize="large" color="info" />
												<Typography>
													May 05, 1995
												</Typography>
											</StackRow>
										</Grid>
										<Grid item xs={6}>
											<Stack direction="row" alignItems="center" spacing={1}>
												<LocalPhoneIcon fontSize="large" color="info" />
												<Typography>
													(+84) 985515422
												</Typography>
											</Stack>
										</Grid>

										<Grid container item xs={6}>
											<Stack direction="row" alignItems="center" spacing={1}>
												<ShareLocationIcon fontSize="large" color="info" />
												<Typography>
													Ba Ria - Vung Tau, Viet Nam
												</Typography>
											</Stack>
										</Grid>
										<Grid item xs={6}>
											<Stack direction="row" alignItems="center" spacing={1}>
												<SchoolIcon fontSize="large" color="info" />
												<Typography>
													<Link href="https://www.uit.edu.vn/" underline="none" target="_blank">
														UIT HCM
													</Link>
												</Typography>
											</Stack>
										</Grid>
										<Grid item xs={6}>
											<Stack direction="row" alignItems="center" spacing={1}>
												<EmailIcon fontSize="large" color="info" />
												<Typography>
													sangbuinhu@gmail.com
												</Typography>
											</Stack>
										</Grid>
										<Grid item xs={6}>
											<Stack direction="row" alignItems="center" spacing={1}>
												<FacebookIcon fontSize="large" color="info" />
												<Typography>
													<Link href="https://www.fb.com/shinn.ns" underline="none" target="_blank">
														Sang Bui
													</Link>
												</Typography>
											</Stack>
										</Grid>
										<Grid item xs={6}>
											<Stack direction="row" alignItems="center" spacing={1}>
												<LinkedInIcon fontSize="large" color="info" />
												<Typography>
													<Link href="https://www.linkedin.com/in/sangbn" underline="none" target="_blank">
														Sang Bui
													</Link>
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
							}} onClick={onButtonClick}>
								Download CV
							</Button>
						</StackCol>
					</Stack>
				</StackRow>
				<StackRow spacing={20}>
					{experiences.map((element, index) => (
						<StackCol spacing={4} key={index}>
							<Box textAlign={"center"}>
								<Button variant="contained" color="primary" size='medium' sx={{
									borderRadius: 0
								}}>
									{element.title}
								</Button>
							</Box>
							<MPaper
								sx={{
									borderRadius: 5
								}}
							>
								<Box
									sx={{
										width: 200,
										height: 200,
										borderRadius: 3,
										alignItems: 'center',
										justifyContent: 'center',
										display: 'flex'
									}}
								>
									<StackCol>
										<Typography variant="h3" textAlign={'center'} fontWeight={"600"} color={'primary'}>
											{element.count}
										</Typography>
										<Typography variant="h6" textAlign={'center'} color={'primary'}>
											{element.subTitle}
										</Typography>
									</StackCol>
								</Box>
							</MPaper>

						</StackCol>
					))}
				</StackRow>
				<Skill></Skill>
				<StackRow>
					<Box
						sx={{
							height: 500
						}}>
					</Box>
				</StackRow>
			</StackCol >
		</Stack>
	);
};

export default Home;