import React, { RefObject } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Slider.scss';
import { Box, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import useBreakpoints from '../../hooks/useBreakpoints';

interface SliderProps {
  isHead: Boolean;
  scrollToSection?: (ref:RefObject<HTMLElement>) => void;
  homeRef?: RefObject<HTMLElement>;
  data: {
    title: String;
    description?: String;
  }[];
}

const Slider: React.FC<SliderProps> = ({ isHead, data, scrollToSection, homeRef }) => {
  const { isMediumScreen, isLargeScreen, smallerThanMedium } = useBreakpoints();
  return (
    <>
      <section className="slider-container">
        <Swiper modules={[Navigation]} spaceBetween={0} slidesPerView={1} navigation loop>
          {data.map((el, i) => (
            <SwiperSlide key={i}>
              <div className="slide-content">
                <img
                  className="slide-img"
                  src={`img/slide-${isHead ? i + 1 : i + 5}.png`}
                  alt="slide"
                />
                {isHead && (
                  <svg
                    className="slider__wave__svg"
                    viewBox="0 0 500 500"
                    preserveAspectRatio="xMinYMin meet">
                    <path d="M0,70 C100,50 350,0 500,50 L500,0 L0,0 Z" className="svg__path"></path>
                  </svg>
                )}
              </div>
              {isHead ? (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '45%',
                    left: '35%',
                    transform: 'translate(-45%, -30%)',
                    width: '50%',
                    color: '#fff',
                    textAlign: 'left',
                    zIndex: '1',
                    bgcolor: 'rgba(117, 188, 105, 0.6)',
                    p: '20px',
                    borderRadius: '15px',
                  }}>
                  <Typography
                    sx={{ fontWeight: '600' }}
                    variant={isLargeScreen ? 'h2' : isMediumScreen ? 'h4' : 'h6'}>
                    {el.title}
                  </Typography>
                  <Box
                    onClick={() => homeRef && scrollToSection && scrollToSection(homeRef)}
                    sx={{
                      display: 'flex',
                      width: '110px',
                      alignItems: 'center',
                      cursor: 'pointer',
                      transition: 'transform 0.5s ease-in-out',
                      ':hover': { transform: 'translateX(20px)' },
                    }}>
                    <Typography variant="body1">Więcej</Typography>
                    <ChevronRightIcon sx={{ width: '20px', height: '20px' }} />
                  </Box>
                </Box>
              ) : (
                <Box
                  sx={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width:  smallerThanMedium ? '70%' : '900px',
                    padding: '70px',
                    color: '#fff',
                    textAlign: 'center',
                    zIndex: '1',
                    bgcolor: 'rgba(167,130,149,.6)',
                  }}>
                  <Typography sx={{ mb: '25px', textTransform: 'uppercase' }} variant={smallerThanMedium ? 'h5' :"h4"}>
                    {el.title}
                  </Typography>
                  <Typography variant={smallerThanMedium ? 'h5' :"h4"}>{el.description}</Typography>
                </Box>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Slider;
