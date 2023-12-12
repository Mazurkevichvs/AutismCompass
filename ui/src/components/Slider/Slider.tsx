import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Slider.scss';
import { Box, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import useBreakpoints from '../../hooks/useBreakpoints';

interface SliderProps {
  isHead: Boolean,
  data: {
    title:String
  }[]
}

const Slider: React.FC<SliderProps> = ({isHead, data}) => {
  const { isMediumScreen, isLargeScreen } = useBreakpoints();
  return (
    <>
      <section className="slider-container">
        <Swiper modules={[Navigation]} spaceBetween={0} slidesPerView={1} navigation loop>
          {data.map((el, i) => (
            <SwiperSlide key={i}>
              <div className="slide-content">
                <img className="slide-img" src={`img/slide-${isHead ? i + 1 : i + 5}.png`} alt="slide" />
                {isHead && <svg
                  className="slider__wave__svg"
                  viewBox="0 0 500 500"
                  preserveAspectRatio="xMinYMin meet">
                  <path d="M0,70 C100,50 350,0 500,50 L500,0 L0,0 Z" className="svg__path"></path>
                </svg>}
              </div>
              {isHead ? <Box
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
                <Typography variant={isLargeScreen ? 'h2' : isMediumScreen ?  "h4" : 'h6'}>{el.title}</Typography>
                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body1">Dołącz się</Typography>
                  <ChevronRightIcon sx={{ width: '20px', height: '20px' }} />
                </Box>
              </Box> :
              <Box sx={{
                boxSizing:'border-box',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '900px',
                  padding:'70px',
                  color: '#fff',
                  textAlign: 'center',
                  zIndex: '1',
                  bgcolor: 'rgba(167,130,149,.6)'
                }}>
                <Typography variant="h4">{el.title}</Typography>
              </Box>}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Slider;
