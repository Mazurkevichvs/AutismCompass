import React, { useState } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Theme,
  useMediaQuery,
} from '@mui/material';
import { theme } from '../../styles/theme';
import { ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon } from '@mui/icons-material';

interface AccordionItemProps {
  data: {
    title?: string;
    content: string;
  };
}

const AccordionItem: React.FC<AccordionItemProps> = ({ data }) => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const [isOpened, setIsOpened] = useState(false);
  return (
    <Accordion
      onClick={() => setIsOpened(!isOpened)}
      sx={{
        mb: '25px',
        color: theme.palette.primary.main,
        backgroundColor: '#B4DBAE',
        ':last-of-type': { mb: isSmallScreen ? '25px' : '0px' },
      }}>
      <AccordionSummary>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
          }}>
          <Typography variant="h6">{data.title}</Typography>
          {isOpened ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body1">{data.content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
