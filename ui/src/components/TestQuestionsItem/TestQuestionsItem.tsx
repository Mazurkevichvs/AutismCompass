import React, { useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';

interface QuestionComponentProps {
  question: {
    id: number;
    questionText: string;
    quizId: number;
    answers: {
      id: number;
      text: string;
      value: number;
    }[];
  },
  handleAnswerSelection: (questionId: number, answerId: number) => void;
}

const TestQuestionsItem: React.FC<QuestionComponentProps> = ({ question, handleAnswerSelection }) => {
  const [activeAnswer, setActiveAnswer] = useState<number | null>(null);

  const handleAnswerClick = (index: number) => {
    setActiveAnswer(index);
    handleAnswerSelection(question.id, index)
  };
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          my: 6,
          width: '45%',
          color: theme.palette.primary.main,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <Typography variant="h6" sx={{ marginBottom: 1 }}>
          {question.questionText}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {question.answers.map((el) => (
            <Box
              key={el.id}
              onClick={() => handleAnswerClick(el.id)}
              sx={{
                backgroundColor: activeAnswer === el.id ? '#b4dbae' : '#d0d0d0',
                padding: 1,
                textAlign: 'center',
                marginBottom: 3,
                cursor: 'pointer',
                borderRadius: '10px',
                ':hover': { backgroundColor: activeAnswer === el.id ? '#b8e0b1' : '#c6dac3' },
              }}>
              {el.text}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default TestQuestionsItem;
