import React, { useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';

interface QuestionComponentProps {
  question: string;
  answers: string[];
}

const TestQuestionsItem: React.FC<QuestionComponentProps> = ({ question, answers }) => {
  const [activeAnswer, setActiveAnswer] = useState<number | null>(null);

  const handleAnswerClick = (index: number) => {
    setActiveAnswer(index);
  };
const theme = useTheme()
  return (
    <>
        <Box sx={{ my: 6, width:'45%', color:theme.palette.primary.main, display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
          <Typography variant="h6" sx={{ marginBottom: 1 }}>
            {question}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {answers.map((answer, index) => (
              <Box
                key={index}
                onClick={() => handleAnswerClick(index)}
                sx={{
                  backgroundColor: activeAnswer === index ? '#b4dbae' : '#d0d0d0',
                  padding: 2,
                  textAlign:'center',
                  marginBottom: 3,
                  cursor: 'pointer',
                  borderRadius:'10px',
                  ':hover': {backgroundColor: activeAnswer === index ? '#b8e0b1' : '#c6dac3'}
                }}>
                {answer}
              </Box>
            ))}
          </Box>
        </Box>
    </>
  );
};

export default TestQuestionsItem;
