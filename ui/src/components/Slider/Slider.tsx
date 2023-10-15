import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Slider.scss';
import { Box, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import useBreakpoints from '../../hooks/useBreakpoints';

const Slider: React.FC = () => {
  const { isSmallScreen, isMediumScreen, isLargeScreen } = useBreakpoints();
  return (
    <>
      <section className="slider-container">
        <Swiper modules={[Navigation]} spaceBetween={0} slidesPerView={1} navigation loop>
          {[...new Array(4)].map((_el, i) => (
            <SwiperSlide key={i}>
              <div className="slide-content">
                <img className="slide-img" src={`img/slide-${i + 1}.png`} alt="slide" />
                <svg
                  className="slider__wave__svg"
                  viewBox="0 0 500 500"
                  preserveAspectRatio="xMinYMin meet">
                  <path d="M0,70 C100,50 350,0 500,50 L500,0 L0,0 Z" className="svg__path"></path>
                </svg>
              </div>
              <Box
                sx={{
                  position: 'absolute',
                  top: '45%',
                  left: '30%',
                  transform: 'translate(-45%, -30%)',
                  width: '500px',
                  color: '#fff',
                  textAlign: 'left',
                  zIndex: '1',
                }}>
                <Typography variant={isLargeScreen ? 'h2' : isMediumScreen ?  "h4" : 'h6'}>Lorem ipsum dolor sit amet consectetur.</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body1">Dołącz się</Typography>
                  <ChevronRightIcon sx={{ width: '20px', height: '20px' }} />
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Slider;
