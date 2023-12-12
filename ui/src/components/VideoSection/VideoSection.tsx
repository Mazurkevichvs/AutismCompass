import React from 'react';
import { Container, Typography, Grid, Paper, Card, CardContent, CardMedia, useTheme } from '@mui/material';

const VideoSection: React.FC = () => {
  const theme = useTheme()
  return (
    <section>
      <Container maxWidth="lg" sx={{color:theme.palette.primary.main}}>
        <Typography variant="h4" gutterBottom>
        Jak pomagać osobom Neuroróżnorodnym?
        </Typography>
        <Grid container spacing={10} justifyContent="space-around" marginTop={1}>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: '#EB6FA1', borderRadius: '25px' }}>
              <CardContent sx={{color:theme.palette.primary.main}}>
                <Typography variant="h5" gutterBottom>
                  1. Lorem ipsum dolor sit
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur. Est orci amet gravida netus molestie
                  sagittis fermentum. Sed nullam nullam quis est orci. Maecenas lectus pretium
                  egestas auctor ultricies fringilla felis ullamcorper. Ut cras urna ante massa ante
                  tempus nisi mauris aliquet. Imperdiet amet diam nisl tellus eget vehicula. Nisl
                  malesuada mi dignissim
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} >
            <Card sx={{ bgcolor: '#FFE65D', borderRadius: '25px' }}>
              <CardContent sx={{color:theme.palette.primary.main}}>
                <Typography variant="h5" gutterBottom>
                  2. Lorem ipsum dolor sit
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur. Est orci amet gravida netus molestie
                  sagittis fermentum. Sed nullam nullam quis est orci. Maecenas lectus pretium
                  egestas auctor ultricies fringilla felis ullamcorper. Ut cras urna ante massa ante
                  tempus nisi mauris aliquet. Imperdiet amet diam nisl tellus eget vehicula. Nisl
                  malesuada mi dignissim
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: '#AADDF0', borderRadius: '25px' }}>
              <CardContent sx={{color:theme.palette.primary.main}}>
                <Typography variant="h5" gutterBottom>
                  3. Lorem ipsum dolor sit
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur. Est orci amet gravida netus molestie
                  sagittis fermentum. Sed nullam nullam quis est orci. Maecenas lectus pretium
                  egestas auctor ultricies fringilla felis ullamcorper. Ut cras urna ante massa ante
                  tempus nisi mauris aliquet. Imperdiet amet diam nisl tellus eget vehicula. Nisl
                  malesuada mi dignissim
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Paper sx={{margin:'0 auto', marginTop: '40px', padding:'20px', width:'50%', backgroundColor: '#F0F0F0', border: '2px solid #E0E0E0', borderRadius: '8px' }}>
          <CardMedia
            component="iframe"
            title="Autism Video"
            width="560"
            height="315"
            // src="https://www.youtube.com/embed/tEBsTX2OVgI"
            allowFullScreen
          />
        </Paper>
      </Container>
    </section>
  );
};

export default VideoSection;
