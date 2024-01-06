import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import { theme } from '../../styles/theme';
import { ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon } from '@mui/icons-material';
import useBreakpoints from '../../hooks/useBreakpoints';

interface AccordionItemProps {
  data: {
    title?: string;
    type: Number;
    content: string;
  };
  isOpen: boolean,
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ data, isOpen, onToggle }) => {
  const {smallerThanMedium} = useBreakpoints()
  
  return (
    <Accordion
      expanded={isOpen}
      onChange={onToggle}
      sx={{
        p:'10px',
        mb: '25px',
        color: theme.palette.primary.main,
        backgroundColor: data.type ? '#B4DBAE' : '#A78295',
        ':last-of-type': { mb: smallerThanMedium ? '25px' : '0px' },
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
          {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body1">{data.content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
