import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface AboutCardProps {
  isSmallScreen: boolean;
}

const AboutCard: React.FC<AboutCardProps> = ({isSmallScreen}) => {
  return (
    <Box sx={{width: isSmallScreen ? '100%' : '45%', mb: isSmallScreen ? '30px' : '0'}}>
      <Card sx={{ backgroundColor: '#E6F1F8' }}>
        <CardContent sx={{padding: '40px'}}>
          <Typography variant="h6" gutterBottom color= '#00454C'>
            Lorem ipsum dolor sit amet
          </Typography>
          <Typography mb={'25px'} variant="body2" color= '#00454C'>
          Lorem ipsum dolor sit amet consectetur. Scelerisque diam vulputate arcu amet quam. Proin feugiat arcu magna sit neque interdum pretium lacinia dui. Ipsum quam molestie cras faucibus turpis ac ut. Sed mattis sagittis vestibulum sagittis ornare at nullam est mattis. Platea etiam suspendisse eleifend sed tortor sed.
          </Typography>
          <Button variant="text" color="primary">
            Więcej <ChevronRightIcon/>
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AboutCard;
