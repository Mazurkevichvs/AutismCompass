import React from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';
import './pages.scss'
import { SupportAdvices, VideoSection, SupportTabs } from '../components';
const Support: React.FC = () => {
    const theme = useTheme();
  return (
    <>
      <section className='support__introduce'>
        <Container maxWidth="lg">
            <Box sx={{display: 'flex', justifyContent:'space-around', alignItems:'center', width: '100%', }}>
                <Typography variant={'h2'} sx={{mt:5, width:'50%', color: theme.palette.primary.main,}}>Wsparcie dla osób z autyzmem</Typography>
                <img src="img/support-family.png" alt="support family" />
            </Box>
        </Container>
      </section>     
        <VideoSection/>
        <SupportTabs/>
        <SupportAdvices/>
    </>
  );
};

export default Support;
