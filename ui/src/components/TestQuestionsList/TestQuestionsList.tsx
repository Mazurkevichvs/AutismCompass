import { Box, Container , Button, Typography, useTheme, CircularProgress} from '@mui/material';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { TestQuestionsItem } from '..';
import { QuestionType } from '../../types/types';

interface TestQuestionsListProps {
  quiz:QuestionType,
  setIsResult: Dispatch<SetStateAction<boolean>>
}

const TestQuestionsList: React.FC<TestQuestionsListProps> = ({quiz, setIsResult}) => {
  const [userResponses, setUserResponses] = useState<Array<{ questionId: number; answerId: number }>>([]);
  const [isLoading, setIsLoading] = useState(false)
  const theme = useTheme()
  const handleAnswerSelection = (questionId: number, answerId: number) => {
    setUserResponses((prevResponses) => [
      ...prevResponses.filter((response) => response.questionId !== questionId),
      { questionId, answerId },
    ]);
  };

  const submitTest = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:5154/api/quiz`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userResponses),
      });
      console.log(response)
      if (response.ok) {
        setIsResult(true)
      } 
    } catch (error) {
      console.error('Błąd wysyłki emaila', error);
      setIsResult(false)
    } finally {
      setIsLoading(false);
    }
  }
    const testQuestionsItems = quiz.questions.map((el) => <TestQuestionsItem handleAnswerSelection={handleAnswerSelection} question={el} key={el.id}/>)
  return (
    <>
      <section style={{height:'100%'}}>
        <Container maxWidth="lg" sx={{display:'flex', flexDirection:'column', alignItems:'center'}} >
        <Typography variant="h5" gutterBottom sx={{mb:'20px', fontWeight: 600, color:theme.palette.primary.main}} >
            {quiz.name}
          </Typography>
            <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>
            {testQuestionsItems}
            </Box>
            {isLoading ? <CircularProgress /> : <Button
            onClick={() => submitTest()}
            sx={{width:'40%', my:'30px'}}
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit">
                  Sprawdz swoj wynik
                </Button>}
        </Container>
      </section>
    </>
  );
};

export default TestQuestionsList;
