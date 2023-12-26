import React, { RefObject } from 'react';
import { Container, Typography, Grid, Paper, CardMedia, useTheme } from '@mui/material';
import { SupportStickerItem } from '..';
import { SUPPORTSTICKERS } from '../../consts/consts';

interface VideoSectionProps {
  eventSectionRef: RefObject<HTMLElement>
}

const VideoSection: React.FC<VideoSectionProps> = ({eventSectionRef}) => {
  const theme = useTheme()
  return (
    <section ref={eventSectionRef}>
      <Container maxWidth="lg" sx={{color:theme.palette.primary.main}}>
        <Typography variant="h4" gutterBottom>
        Jak pomagać osobom Neuroróżnorodnym?
        </Typography>
        <Grid container spacing={10} justifyContent="space-around" marginTop={1}>
          {SUPPORTSTICKERS.map((el) => <SupportStickerItem key={el.id} id={el.id} title={el.title} description={el.description} color={el.color} /> )}
        </Grid>
        <Paper sx={{margin:'0 auto', marginTop: '40px', padding:'20px', width:'50%', backgroundColor: '#F0F0F0', border: '2px solid #E0E0E0', borderRadius: '8px' }}>
          <CardMedia
            component="iframe"
            title="Autism Video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/tEBsTX2OVgI"
            allowFullScreen
          />
        </Paper>
      </Container>
    </section>
  );
};

export default VideoSection;
