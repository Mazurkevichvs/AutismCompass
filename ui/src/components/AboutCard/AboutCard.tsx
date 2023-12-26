import React, {useState} from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

interface AboutCardProps {
  isSmallScreen: boolean;
  description: {
    id: Number,
    title: String;
    shortDescription: String,
    description: String
  };
  isOpened: boolean;
  onCardClick: () => void;
}

const AboutCard: React.FC<AboutCardProps> = ({isSmallScreen, description, isOpened, onCardClick}) => {
  const [height, setHeight] = useState(isOpened ? '500px' : '300px');
  const handleButtonClick = () => {
    onCardClick();
    setHeight((prevHeight) => (prevHeight === '500px' ? '300px' : '500px'));
  };
  return (
    <Box sx={{width: isSmallScreen ? '70%' : '45%', mb: isSmallScreen ? '30px' : '0'}}>
      <Card sx={{ backgroundColor: '#E6F1F8', minHeight: height, transition: 'height 0.2s ease-in-out' }}>
        <CardContent sx={{padding: '40px', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'left' ,height:'100%'}}>
          <Typography variant="h6" gutterBottom color= '#00454C'>
            {description.title}
          </Typography>
          <Typography mb={'25px'} variant="body2" color= '#00454C'>
          { isOpened ? description.description : description.shortDescription}
          </Typography>
          <Button onClick={handleButtonClick} variant="text" color="primary" sx={{width:'20%'}}>
            {isOpened ? <><ChevronLeftIcon/> Mniej </> : <>Więcej <ChevronRightIcon/></>}   
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AboutCard;
