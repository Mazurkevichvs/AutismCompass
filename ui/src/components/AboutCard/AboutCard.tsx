import React, {useState} from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import useBreakpoints from '../../hooks/useBreakpoints';

interface AboutCardProps {
  description: {
    id: Number,
    title: String;
    shortDescription: String,
    description: String
  };
  isOpened: boolean;
  onCardClick: () => void;
}

const AboutCard: React.FC<AboutCardProps> = ({description, isOpened, onCardClick}) => {
  const [height, setHeight] = useState(isOpened ? '500px' : '300px');
  const {isExtraSmallScreen, smallerThanMedium} = useBreakpoints()
  const handleButtonClick = () => {
    onCardClick();
    setHeight((prevHeight) => (prevHeight === '500px' ? '300px' : '500px'));
  };
  return (
    <Box sx={{width: isExtraSmallScreen ? '100%' : smallerThanMedium ? '70%' : '45%', mb: smallerThanMedium ? '30px' : '0'}}>
      <Card sx={{ backgroundColor: '#E6F1F8', minHeight: isExtraSmallScreen ? '100%' : height, transition: 'height 0.2s ease-in-out' }}>
        <CardContent sx={{padding: isExtraSmallScreen ? '20px' : '40px', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'left' ,height:'100%'}}>
          <Typography variant="h6" gutterBottom color= '#00454C'>
            {description.title}
          </Typography>
          <Typography mb={isExtraSmallScreen ? '10px' :'25px'} variant="body2" color= '#00454C'>
          { isOpened ? description.description : description.shortDescription}
          </Typography>
          <Button onClick={handleButtonClick} variant="text" color="primary" sx={{width:'20%', fontSize: isExtraSmallScreen ? '14px' : '16px', justifyContent:'left'}}>
            {isOpened ? <><ChevronLeftIcon/> Mniej </> : <>Więcej <ChevronRightIcon/></>}   
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AboutCard;
