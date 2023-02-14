import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SchoolIcon from '@mui/icons-material/School';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import { Button, Fab, Grid, Link, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

import StackCol from '../components/common/StackCol';
import StackRow from '../components/common/StackRow';

/* Image */
import avatar from "../assets/avatar.jpg";

import jsLogo from "../assets/jsLogo.png";
import netLogo from "../assets/netLogo.png";
import swiftLogo from "../assets/swiftLogo.png";
import tsLogo from "../assets/tsLogo.png";
import goLogo from "../assets/goLogo.png";
import pythonLogo from "../assets/pythonLogo.png";

import nodejsLogo from "../assets/nodejsLogo.png";
import reactjsLogo from "../assets/reactjsLogo.png";
import jqueryLogo from "../assets/jqueryLogo.png";
import flaskLogo from "../assets/flaskLogo.png";
import netCoreLogo from "../assets/netCoreLogo.png";
import expressLogo from "../assets/expressLogo.png";
import tensorflowLogo from "../assets/tensorflowLogo.png";
import kerasLogo from "../assets/kerasLogo.png";
import openCVLogo from "../assets/openCVLogo.png";

import mongoLogo from "../assets/mongoLogo.png";
import postgresqlLogo from "../assets/postgresqlLogo.png";
import mysqlLogo from "../assets/mysqlLogo.png";

import githubLogo from "../assets/githubLogo.png";

import seleniumLogo from "../assets/seleniumLogo.png";
import scrapyLogo from "../assets/scrapyLogo.png";
import gitLogo from "../assets/gitLogo.png";
import dockerLogo from "../assets/dockerLogo.png";
import beautifulSoupLogo from "../assets/beautifulSoupLogo.png";


import awsLogo from "../assets/awsLogo.png";
import awsCloudwatchLogo from "../assets/awsCloudwatchLogo.png";
import awsEc2Logo from "../assets/awsEc2Logo.png";
import awsRekogLogo from "../assets/awsRekogLogo.png";
import awsS3Logo from "../assets/awsS3Logo.png";


type Props = {};
const experiences = [{
	title: 'Experience',
	count: '4 +',
	subTitle: 'years'
}, {
	title: 'Project',
	count: '5',
	subTitle: 'done'
}, {
	title: 'Company',
	count: '4',
	subTitle: 'worked'
}];

const languages = [{
	name: 'Javascript',
	count: '4 +',
	image: jsLogo
}, {
	name: 'Python',
	count: '2+',
	image: pythonLogo
}, {
	name: 'TypeScript',
	count: '1+',
	image: tsLogo
}, {
	name: 'C#',
	count: '1+',
	image: netLogo
}, {
	name: 'Swift',
	count: '1+',
	image: swiftLogo
}, {
	name: 'Golang',
	count: '1+',
	image: goLogo
}];

const technologies = [{
	name: 'ReactJS',
	count: '4 +',
	image: reactjsLogo
}, {
	name: 'NodeJS',
	count: '2+',
	image: nodejsLogo
}, {
	name: 'Jquery',
	count: '1+',
	image: jqueryLogo
}, {
	name: 'Flask',
	count: '1+',
	image: flaskLogo
}, {
	name: '.NET core',
	count: '1+',
	image: netCoreLogo
}, {
	name: 'ExpressJS',
	count: '1+',
	image: expressLogo
},
{
	name: 'Tensorflow',
	count: '1+',
	image: tensorflowLogo
}, {
	name: 'Keras',
	count: '1+',
	image: kerasLogo
}, {
	name: 'OpenCV',
	count: '1+',
	image: openCVLogo
}
];

const databases = [{
	name: 'MongoDB',
	image: mongoLogo
}, {
	name: 'PostgreSQL',
	image: postgresqlLogo
}, {
	name: 'MySQL',
	image: mysqlLogo
}];

const tools = [{
	name: 'Git',
	image: gitLogo
}, {
	name: 'Github',
	image: githubLogo
}, {
	name: 'Docker',
	image: dockerLogo
}, {
	name: 'Selenium',
	image: seleniumLogo
}, {
	name: 'Scrapy',
	image: scrapyLogo
}, {
	name: 'Beautiful Soup',
	image: beautifulSoupLogo
}];

const awsClouds = [{
	name: 'EC2',
	image: awsEc2Logo
}, {
	name: 'Rekognition',
	image: awsRekogLogo
}, {
	name: 'S3',
	image: awsS3Logo
}, {
	name: 'CloudWatch',
	image: awsCloudwatchLogo
}];

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
									borderRadius: 6
								}}>
									{element.title}
								</Button>
							</Box>
							<Box
								sx={{
									width: 200,
									height: 200,
									backgroundColor: 'primary.dark',
									'&:hover': {
										backgroundColor: 'primary.main',
										opacity: [0.9, 0.8, 0.7],
									},
									boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
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
						</StackCol>
					))}
				</StackRow>
				<StackRow spacing={20}>
					<StackCol>
						<Typography variant="h5" fontWeight={"600"} ml={'18px'}>
							PROGRAMING LANGUAGES
						</Typography>
						<Grid container spacing={2} width={"400px"}>
							{languages.map((element, index) => (
								<Grid item xs={4} key={index}>
									<Box
										sx={{
											width: 110,
											height: 110,
											backgroundColor: 'primary.dark',
											'&:hover': {
												backgroundColor: 'primary.main',
												opacity: [0.9, 0.8, 0.7],
											},
											boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
											borderRadius: 3,
											alignItems: 'center',
											justifyContent: 'center',
											display: 'flex'
										}}
									>
										<StackCol>
											<Box sx={{
												textAlign: 'center',
											}}>
												<img style={{ height: '60px' }} src={element.image} />
												<Typography textAlign={'center'} fontSize={'15px'}>
													{element.name}
												</Typography>
											</Box>
										</StackCol>
									</Box>
								</Grid>
							))}
						</Grid>
					</StackCol>
					<StackCol>
						<Typography variant="h5" fontWeight={"600"} ml={'18px'}>
							TOOLS
						</Typography>
						<Grid container spacing={2} width={"400px"}>
							{tools.map((element, index) => (
								<Grid item xs={4} key={index}>
									<Box
										sx={{
											width: 110,
											height: 110,
											backgroundColor: 'primary.dark',
											'&:hover': {
												backgroundColor: 'primary.main',
												opacity: [0.9, 0.8, 0.7],
											},
											boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
											borderRadius: 3,
											alignItems: 'center',
											justifyContent: 'center',
											display: 'flex'
										}}
									>
										<StackCol>
											<Box sx={{
												textAlign: 'center',
											}}>
												<img style={{ height: '60px' }} src={element.image} />
												<Typography textAlign={'center'} fontSize={'15px'}>
													{element.name}
												</Typography>
											</Box>
										</StackCol>
									</Box>
								</Grid>
							))}
						</Grid>
					</StackCol>
				</StackRow>
				<StackRow spacing={20}>
					<StackCol>
						<Typography variant="h5" fontWeight={"600"} ml={'18px'}>
							DATABASES / AWS PLATFORMS
						</Typography>
						<Grid container spacing={2} width={"400px"}>
							{databases.map((element, index) => (
								<Grid item xs={4} key={index}>
									<Box
										sx={{
											width: 110,
											height: 110,
											backgroundColor: 'primary.dark',
											'&:hover': {
												backgroundColor: 'primary.main',
												opacity: [0.9, 0.8, 0.7],
											},
											boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
											borderRadius: 3,
											alignItems: 'center',
											justifyContent: 'center',
											display: 'flex'
										}}
									>
										<StackCol>
											<Box sx={{
												textAlign: 'center',
											}}>
												<img style={{ height: '60px' }} src={element.image} />
												<Typography textAlign={'center'} fontSize={'15px'}>
													{element.name}
												</Typography>
											</Box>
										</StackCol>
									</Box>
								</Grid>
							))}
						</Grid>
					</StackCol>
					<StackCol>
						<Typography variant="h5" fontWeight={"600"} ml={'18px'}>
							TECHNOLOGIES / LIBRARIES
						</Typography>
						<Grid container spacing={2} width={"400px"}>
							{technologies.map((element, index) => (
								<Grid item xs={4} key={index}>
									<Box
										sx={{
											width: 110,
											height: 110,
											backgroundColor: 'primary.dark',
											'&:hover': {
												backgroundColor: 'primary.main',
												opacity: [0.9, 0.8, 0.7],
											},
											boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
											borderRadius: 3,
											alignItems: 'center',
											justifyContent: 'center',
											display: 'flex'
										}}
									>
										<StackCol>
											<Box sx={{
												textAlign: 'center',
											}}>
												<img style={{ height: '60px' }} src={element.image} />
												<Typography textAlign={'center'} fontSize={'15px'}>
													{element.name}
												</Typography>
											</Box>
										</StackCol>
									</Box>
								</Grid>
							))}
						</Grid>
					</StackCol>
				</StackRow>
				<StackRow spacing={20}>
					<StackCol>
						<Typography variant="h5" fontWeight={"600"} ml={'18px'}>
							AWS CLOUD PLATFORMS
						</Typography>
						<Grid container spacing={2} width={"400px"}>
							{awsClouds.map((element, index) => (
								<Grid item xs={4} key={index}>
									<Box
										sx={{
											width: 110,
											height: 110,
											backgroundColor: 'primary.dark',
											'&:hover': {
												backgroundColor: 'primary.main',
												opacity: [0.9, 0.8, 0.7],
											},
											boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
											borderRadius: 3,
											alignItems: 'center',
											justifyContent: 'center',
											display: 'flex'
										}}
									>
										<StackCol>
											<Box sx={{
												textAlign: 'center',
											}}>
												<img style={{ height: '60px' }} src={element.image} />
												<Typography textAlign={'center'} fontSize={'15px'}>
													{element.name}
												</Typography>
											</Box>
										</StackCol>
									</Box>
								</Grid>
							))}
						</Grid>
					</StackCol>
					<StackCol>
						{/* <Typography variant="h5" fontWeight={"600"} ml={'18px'}>
							CLOUD PLATFORM
						</Typography> */}
						<Grid container spacing={2} width={"400px"}>
						</Grid>
					</StackCol>
				</StackRow>
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