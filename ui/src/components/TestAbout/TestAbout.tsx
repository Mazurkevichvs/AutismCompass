import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const TestAbout: React.FC = () => {
  return (
    <>
      <section style={{height:'100%'}}>
        <Container maxWidth="lg" sx={{py:'50px'}}>
          <Typography variant="h4" gutterBottom mb={'20px'}>
            Jak to działa?
          </Typography>
          <Typography variant="h6" align="left" gutterBottom mb={'20px'}>
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
          <Typography mb={'30px'} variant="body1" align="left" gutterBottom>
            Lorem ipsum dolor sit amet consectetur. Est orci amet gravida netus molestie sagittis
            fermentum. Sed nullam nullam quis est orci. Maecenas lectus pretium egestas auctor
            ultricies fringilla felis ullamcorper. Ut cras urna ante massa ante tempus nisi mauris
            aliquet. Imperdiet amet diam nisl tellus eget vehicula. Nisl malesuada mi dignissim
            pellentesque aliquet. Magna accumsan maecenas volutpat varius facilisi nunc ac. Molestie
            non sit morbi vitae elementum convallis fermentum. Montes vitae ornare quis aliquet diam
            dui vel cursus. Auctor cursus consectetur metus porttitor consequat vestibulum fringilla
            metus.
          </Typography>
          <Typography mb={'30px'} variant="body1" align="left" gutterBottom>
            Lorem ipsum dolor sit amet consectetur. Est orci amet gravida netus molestie sagittis
            fermentum. Sed nullam nullam quis est orci. Maecenas lectus pretium egestas auctor
            ultricies fringilla felis ullamcorper. Ut cras urna ante massa ante tempus nisi mauris
            aliquet.
          </Typography>
          <Box sx={{display:'flex', p:'25px', bgcolor:'#FFDFB9', color:'#FF8A00', borderRadius:'25px'}}>
            <img src="img/info-circle.svg" alt="info" />
            <Typography variant="body1" align="left" sx={{ml:'20px'}}>
              Lorem ipsum dolor sit amet consectetur. Est orci amet gravida netus molestie sagittis
              fermentum. Sed nullam nullam quis est orci. Maecenas lectus pretium egestas auctor
              ultricies fringilla felis ullamcorper. Ut cras urna ante massa ante tempus nisi mauris
              aliquet.  Lorem ipsum dolor sit amet consectetur. Est orci amet gravida netus molestie sagittis
              fermentum. Sed nullam nullam quis est orci. Maecenas lectus pretium egestas auctor
              ultricies fringilla felis ullamcorper. Ut cras urna ante massa ante tempus nisi mauris
              aliquet.
            </Typography>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default TestAbout;
