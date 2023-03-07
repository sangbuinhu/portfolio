import {
  awsCloudwatchLogo, awsEc2Logo, awsRekogLogo, awsS3Logo, beautifulSoupLogo, dockerLogo, expressLogo, flaskLogo, githubLogo, gitLogo, goDemo, goLogo, jqueryLogo, jsLogo, kerasLogo, mongoLogo, mysqlLogo, netCoreLogo, netLogo, nodejsLogo, openCVLogo, postgresqlLogo, pythonLogo, reactjsLogo, scrapyLogo, seleniumLogo, swiftLogo, tensorflowLogo, tsLogo
} from "./ImageLogo";

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
  image: goDemo
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


export {
  experiences,
  languages,
  technologies,
  databases,
  tools,
  awsClouds
};