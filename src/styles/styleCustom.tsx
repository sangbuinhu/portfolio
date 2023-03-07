export const swiperCustom = {
  userSelect: 'none',
  margin: 'auto',
  width: 1300,
  "& .swiper-slide": {
    width: "100%",
    paddingBottom: "3rem"
  },
  "& .swiper-slide-active": { opacity: 1 },
  "& .swiper-pagination-bullet": {
    border: '2px solid black',
    backgroundColor: "#fff",
    width: '10px',
    height: '10px',
    transition: 'all .3s',
    position: 'relative',
    marginX: '10px !important',
    opacity: 1,
    '&::after': {
      position: 'absolute',
      height: '2px',
      width: '22px',
      backgroundColor: 'black',
      left: '100%',
      content: '""',
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'block'
    }
  },
  "& .swiper-pagination-bullet:last-child": {
    marginRight: 0,
    '&::after': {
      display: 'none'
    }
  },
  "& .swiper-pagination-bullet-active": {
    backgroundColor: "#007aff",
    width: '13px',
    height: '13px',
    transition: 'all .3s'
  },
  "& .swiper-pagination": {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};
