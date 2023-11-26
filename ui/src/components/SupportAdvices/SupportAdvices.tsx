import React from 'react';
import { Container, Box, Typography } from '@mui/material';

const SupportAdvices: React.FC = () => {
  return (
    <>
      <section>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{mr:'100px'}}>
              <img
                src="/img/support-kid1.png"
                alt="First Block"
                style={{ width: '450px', height: 'auto', borderRadius:'15px' }}
              />
            </Box>
            <Box>
              <Typography variant="h4" mb={2}>
                Porada dla autystów 1
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur. Aliquet fringilla in bibendum lectus
                elementum pellentesque elit. Ornare ut porttitor facilisis viverra risus. Felis nec
                sed sit in egestas. Vulputate egestas tincidunt vitae hendrerit laoreet. Diam massa
                platea in magna. Mauris mattis elementum commodo leo hendrerit. Sit tellus luctus
                mauris sit ultrices varius sit volutpat eu. Risus bibendum nunc lorem nullam sit.
                Pulvinar augue turpis ullamcorper potenti tristique turpis libero facilisi nec. In
                pellentesque volutpat aliquet ultricies faucibus aliquet lorem. Fermentum arcu sed
                luctus viverra maecenas lacinia.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', my: 4 }}>
            <Box>
              <Typography variant="h4" mb={2}>
                Porada dla autystów 2
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur. Aliquet fringilla in bibendum lectus
                elementum pellentesque elit. Ornare ut porttitor facilisis viverra risus. Felis nec
                sed sit in egestas. Vulputate egestas tincidunt vitae hendrerit laoreet. Diam massa
                platea in magna. Mauris mattis elementum commodo leo hendrerit. Sit tellus luctus
                mauris sit ultrices varius sit volutpat eu. Risus bibendum nunc lorem nullam sit.
                Pulvinar augue turpis ullamcorper potenti tristique turpis libero facilisi nec. In
                pellentesque volutpat aliquet ultricies faucibus aliquet lorem. Fermentum arcu sed
                luctus viverra maecenas lacinia.
              </Typography>
            </Box>
            <Box sx={{ml:'100px'}}>
              <img
                src="/img/support-kid2.png"
                alt="Third Block"
                style={{ width: '450px', height: 'auto', borderRadius:'15px' }}
              />
            </Box>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default SupportAdvices;
