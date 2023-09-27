import React from 'react';
import { Box, Typography, useMediaQuery, Theme, Container, useTheme } from '@mui/material';
import { AboutCard } from '..';

const AboutSection: React.FC = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const theme = useTheme();
  return (
    <section>
      <Container
        maxWidth="lg">
        <Box
          sx={{
            backgroundColor: theme.palette.background.default,
            color: theme.palette.primary.main,
          }}>
          <Typography variant="h4" align="left" gutterBottom mb={'30px'}>
            Lorem ipsum dolor sit amet
          </Typography>
          <Typography variant="h6" align="left" gutterBottom mb={'20px'}>
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
          <Typography mb={'40px'} variant="body1" align="left" gutterBottom>
            Lorem ipsum dolor sit amet consectetur. Est orci amet gravida netus molestie sagittis
            fermentum. Sed nullam nullam quis est orci. Maecenas lectus pretium egestas auctor
            ultricies fringilla felis ullamcorper. Ut cras urna ante massa ante tempus nisi mauris
            aliquet. Imperdiet amet diam nisl tellus eget vehicula. Nisl malesuada mi dignissim
            pellentesque aliquet. Magna accumsan maecenas volutpat varius facilisi nunc ac. Molestie
            non sit morbi vitae elementum convallis fermentum. Montes vitae ornare quis aliquet diam
            dui vel cursus. Auctor cursus consectetur metus porttitor consequat vestibulum fringilla
            metus.
          </Typography>
          <Typography mb={'60px'} variant="body1" align="left" gutterBottom>
            Sagittis diam vitae in pellentesque accumsan nunc lobortis vestibulum sagittis. Quis a
            pharetra nulla laoreet enim lectus tincidunt lectus. Varius mattis lectus consectetur
            viverra nec erat sit ridiculus nunc. Suspendisse proin justo amet amet placerat et.
            Neque volutpat magna facilisis viverra.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: isSmallScreen ? 'column' : 'row',
          }}>
          <AboutCard isSmallScreen={isSmallScreen} />
          <AboutCard isSmallScreen={isSmallScreen} />
        </Box>
      </Container>
    </section>
  );
};

export default AboutSection;
