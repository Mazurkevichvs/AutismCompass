import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface AboutCardProps {
  isSmallScreen: boolean;
  title: String;
  description: String;
}

const AboutCard: React.FC<AboutCardProps> = ({isSmallScreen, title, description}) => {
  return (
    <Box sx={{width: isSmallScreen ? '100%' : '45%', mb: isSmallScreen ? '30px' : '0'}}>
      <Card sx={{ backgroundColor: '#E6F1F8' }}>
        <CardContent sx={{padding: '40px'}}>
          <Typography variant="h6" gutterBottom color= '#00454C'>
            {title}
          </Typography>
          <Typography mb={'25px'} variant="body2" color= '#00454C'>
          {description}
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
