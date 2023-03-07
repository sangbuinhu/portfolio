import { Box, Grid, Typography } from '@mui/material';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  awsClouds, databases, languages, technologies, tools
} from '../components/common/Infomation';
import MPaper from '../components/common/MPaper';
import StackCol from '../components/common/StackCol';
import { SKILL } from '../configs/constants';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { swiperCustom } from '../styles/styleCustom';

type Props = {};

const Skill = (props: Props) => {
  return (
    <Box marginTop={20}>
      <Box sx={{
        ...swiperCustom
      }}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true
          }}
          modules={[Pagination, Autoplay]}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        >
          <SwiperSlide>
            <MPaper
              sx={{
                height: 400,
                borderRadius: 5
              }}
            >
              <StackCol>
                <Typography
                  fontSize={SKILL.TITLE_FONT_SIZE}
                  fontWeight={"600"}
                  ml={SKILL.TITLE_ML}
                >
                  PROGRAMING LANGUAGES
                </Typography>
                <Grid container rowSpacing={3}>
                  {languages.map((element, index) => (
                    <Grid item xs={4} key={index}>
                      <Box>
                        <StackCol>
                          <Box
                            sx={{
                              textAlign: 'center',
                            }}
                          >
                            <img style={{ height: SKILL.LOGO_SIZE }} src={element.image} />
                            <Typography textAlign={'center'} fontSize={SKILL.FONT_SIZE}>
                              {element.name}
                            </Typography>
                          </Box>
                        </StackCol>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </StackCol>
            </MPaper>
          </SwiperSlide>
          <SwiperSlide>
            <MPaper
              sx={{
                height: 400,
                borderRadius: 5
              }}
            >
              <StackCol>
                <Typography
                  fontSize={SKILL.TITLE_FONT_SIZE}
                  fontWeight={"600"}
                  ml={SKILL.TITLE_ML}
                >
                  TECHNOLOGIES / LIBRARIES / FRAMEWORKS
                </Typography>
                <Grid container rowSpacing={3}>
                  {technologies.map((element, index) => (
                    <Grid item xs={4} key={index}>
                      <Box>
                        <StackCol>
                          <Box sx={{
                            textAlign: 'center',
                          }}>
                            <img style={{ height: SKILL.LOGO_SIZE }} src={element.image} />
                            <Typography textAlign={'center'} fontSize={SKILL.FONT_SIZE}>
                              {element.name}
                            </Typography>
                          </Box>
                        </StackCol>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </StackCol>
            </MPaper>
          </SwiperSlide>
          <SwiperSlide>
            <MPaper
              sx={{
                height: 400,
                borderRadius: 5
              }}
            >
              <StackCol>
                <Typography
                  fontSize={SKILL.TITLE_FONT_SIZE}
                  fontWeight={"600"}
                  ml={SKILL.TITLE_ML}
                >
                  TOOLS
                </Typography>
                <Grid container rowSpacing={3}>
                  {
                    tools.map((element, index) => (
                      <Grid item xs={4} key={index}>
                        <Box>
                          <StackCol>
                            <Box
                              sx={{
                                textAlign: 'center',
                              }}
                            >
                              <img style={{ height: SKILL.LOGO_SIZE }} src={element.image} />
                              <Typography
                                textAlign={'center'}
                                fontSize={SKILL.FONT_SIZE}
                              >
                                {element.name}
                              </Typography>
                            </Box>
                          </StackCol>
                        </Box>
                      </Grid>
                    ))
                  }
                </Grid>
              </StackCol>
            </MPaper>
          </SwiperSlide>
          <SwiperSlide>
            <MPaper
              sx={{
                height: 400,
                borderRadius: 5
              }}
            >
              <StackCol>
                <Typography
                  fontSize={SKILL.TITLE_FONT_SIZE}
                  fontWeight={"600"}
                  ml={SKILL.TITLE_ML}
                >
                  DATABASES / AWS PLATFORMS
                </Typography>
                <Grid container rowSpacing={3}>
                  {databases.map((element, index) => (
                    <Grid item xs={4} key={index}>
                      <Box>
                        <StackCol>
                          <Box sx={{
                            textAlign: 'center',
                          }}>
                            <img style={{ height: SKILL.LOGO_SIZE }} src={element.image} />
                            <Typography textAlign={'center'} fontSize={SKILL.FONT_SIZE}>
                              {element.name}
                            </Typography>
                          </Box>
                        </StackCol>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </StackCol>
            </MPaper>
          </SwiperSlide>
          <SwiperSlide>
            <MPaper
              sx={{
                height: 400,
                borderRadius: 5
              }}
            >
              <StackCol>
                <Typography
                  fontSize={SKILL.TITLE_FONT_SIZE}
                  fontWeight={"600"}
                  ml={SKILL.TITLE_ML}
                >
                  AWS CLOUD PLATFORMS
                </Typography>
                <Grid container rowSpacing={3}>
                  {awsClouds.map((element, index) => (
                    <Grid item xs={4} key={index}>
                      <Box
                        sx={{
                          textAlign: 'center',
                        }}
                      >
                        <img style={{ height: SKILL.LOGO_SIZE }} src={element.image} />
                        <Typography textAlign={'center'} fontSize={SKILL.FONT_SIZE}>
                          {element.name}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </StackCol>
            </MPaper>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>




  );
};

export default Skill;