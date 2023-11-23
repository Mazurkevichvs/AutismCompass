import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography, Container } from '@mui/material';

const SupportTabs: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <section>
        <Container>
          <Box
            sx={{
              backgroundColor: '#BDE6D3',
              color: '#00454C',
              borderRadius: '25px',
            }}>
            <Tabs sx={{borderBottom:'1px solid #00454C'}} value={value} onChange={handleChange} indicatorColor="primary">
              <Tab sx={{ fontWeight: '600', fontSize:'25px', textTransform: 'none', p:'30px' }} label="Lorem ipsum 1" />
              <Tab sx={{ fontWeight: '600', fontSize:'25px', textTransform: 'none', p:'30px' }} label="Lorem ipsum 2" />
              <Tab sx={{ fontWeight: '600', fontSize:'25px', textTransform: 'none', p:'30px' }} label="Lorem ipsum 3" />
            </Tabs>
            <Box sx={{p:'50px'}} p={3}>
              {value === 0 && (
                <Box>
                <Typography>
                Lorem ipsum dolor sit amet consectetur. Est orci amet gravida netus molestie sagittis fermentum. Sed nullam nullam quis est orci. Maecenas lectus pretium egestas auctor ultricies fringilla felis ullamcorper. Ut cras urna ante massa ante tempus nisi mauris aliquet. Imperdiet amet diam nisl tellus eget vehicula. Nisl malesuada mi dignissim pellentesque aliquet. Magna accumsan maecenas volutpat varius facilisi nunc ac. Molestie non sit morbi vitae elementum convallis fermentum. Montes vitae ornare quis aliquet diam dui vel cursus. Auctor cursus consectetur metus porttitor consequat vestibulum fringilla metus.
                </Typography>
                <Typography sx={{mt:'25px'}}>
                Sagittis diam vitae in pellentesque accumsan nunc lobortis vestibulum sagittis. Quis a pharetra nulla laoreet enim lectus tincidunt lectus. Varius mattis lectus consectetur viverra nec erat sit ridiculus nunc. Suspendisse proin justo amet amet placerat et. Neque volutpat magna facilisis viverra.Lorem ipsum dolor sit amet consectetur. Est orci amet gravida netus molestie sagittis fermentum. Sed nullam nullam quis est orci. Maecenas lectus pretium egestas auctor ultricies fringilla felis ullamcorper. Ut cras urna ante massa ante tempus nisi mauris aliquet. Imperdiet amet diam nisl tellus eget vehicula. Nisl malesuada mi dignissim pellentesque aliquet. Magna accumsan maecenas volutpat varius facilisi nunc ac. Molestie non sit morbi vitae elementum convallis fermentum. Montes vitae ornare quis aliquet diam dui vel cursus. Auctor cursus consectetur metus porttitor consequat vestibulum fringilla metus
                </Typography>
                </Box>
              )}
              {value === 1 && (
                <Box>
                <Typography>
                Lorem ipsum dolor sit amet consectetur. Est orci amet gravida netus molestie sagittis fermentum. Sed nullam nullam quis est orci. Maecenas lectus pretium egestas auctor ultricies fringilla felis ullamcorper. Ut cras urna ante massa ante tempus nisi mauris aliquet. Imperdiet amet diam nisl tellus eget vehicula. Nisl malesuada mi dignissim pellentesque aliquet. Magna accumsan maecenas volutpat varius facilisi nunc ac. Molestie non sit morbi vitae elementum convallis fermentum. Montes vitae ornare quis aliquet diam dui vel cursus. Auctor cursus consectetur metus porttitor consequat vestibulum fringilla metus.
                </Typography>
                <Typography sx={{mt:'25px'}}>
                Sagittis diam vitae in pellentesque accumsan nunc lobortis vestibulum sagittis. Quis a pharetra nulla laoreet enim lectus tincidunt lectus. Varius mattis lectus consectetur viverra nec erat sit ridiculus nunc. Suspendisse proin justo amet amet placerat et. Neque volutpat magna facilisis viverra.Lorem ipsum dolor sit amet consectetur. Est orci amet gravida netus molestie sagittis fermentum. Sed nullam nullam quis est orci. Maecenas lectus pretium egestas auctor ultricies fringilla felis ullamcorper. Ut cras urna ante massa ante tempus nisi mauris aliquet. Imperdiet amet diam nisl tellus eget vehicula. Nisl malesuada mi dignissim pellentesque aliquet. Magna accumsan maecenas volutpat varius facilisi nunc ac. Molestie non sit morbi vitae elementum convallis fermentum. Montes vitae ornare quis aliquet diam dui vel cursus. Auctor cursus consectetur metus porttitor consequat vestibulum fringilla metus
                </Typography>
                </Box>
              )}
              {value === 2 && (
                <Box>
                <Typography>
                Lorem ipsum dolor sit amet consectetur. Est orci amet gravida netus molestie sagittis fermentum. Sed nullam nullam quis est orci. Maecenas lectus pretium egestas auctor ultricies fringilla felis ullamcorper. Ut cras urna ante massa ante tempus nisi mauris aliquet. Imperdiet amet diam nisl tellus eget vehicula. Nisl malesuada mi dignissim pellentesque aliquet. Magna accumsan maecenas volutpat varius facilisi nunc ac. Molestie non sit morbi vitae elementum convallis fermentum. Montes vitae ornare quis aliquet diam dui vel cursus. Auctor cursus consectetur metus porttitor consequat vestibulum fringilla metus.
                </Typography>
                <Typography sx={{mt:'25px'}}>
                Sagittis diam vitae in pellentesque accumsan nunc lobortis vestibulum sagittis. Quis a pharetra nulla laoreet enim lectus tincidunt lectus. Varius mattis lectus consectetur viverra nec erat sit ridiculus nunc. Suspendisse proin justo amet amet placerat et. Neque volutpat magna facilisis viverra.Lorem ipsum dolor sit amet consectetur. Est orci amet gravida netus molestie sagittis fermentum. Sed nullam nullam quis est orci. Maecenas lectus pretium egestas auctor ultricies fringilla felis ullamcorper. Ut cras urna ante massa ante tempus nisi mauris aliquet. Imperdiet amet diam nisl tellus eget vehicula. Nisl malesuada mi dignissim pellentesque aliquet. Magna accumsan maecenas volutpat varius facilisi nunc ac. Molestie non sit morbi vitae elementum convallis fermentum. Montes vitae ornare quis aliquet diam dui vel cursus. Auctor cursus consectetur metus porttitor consequat vestibulum fringilla metus
                </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default SupportTabs;
