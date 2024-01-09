import {
  Box,
  Container,
  Button,
  Typography,
  useTheme,
  CircularProgress,
  Alert,
} from '@mui/material';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { TestQuestionsItem } from '..';
import { QuestionType, UserResult } from '../../types/types';

interface TestQuestionsListProps {
  quiz: QuestionType;
  setIsResult: Dispatch<SetStateAction<boolean>>;
  setUserResult: Dispatch<SetStateAction<UserResult | null>>;
}

const TestQuestionsList: React.FC<TestQuestionsListProps> = ({
  quiz,
  setIsResult,
  setUserResult,
}) => {
  const [userResponses, setUserResponses] = useState<
    Array<{ questionId: number; answerId: number }>
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const theme = useTheme();
  const handleAnswerSelection = (questionId: number, answerId: number) => {
    setUserResponses((prevResponses) => [
      ...prevResponses.filter((response) => response.questionId !== questionId),
      { questionId, answerId },
    ]);
  };

  const submitTest = async () => {
    const obj = { questionAnswers: userResponses };
    console.log(obj)
    try {
      if (!userResponses || userResponses.length !== 15) {
        setError(true);
        return;
      }
      setError(false);
      setIsLoading(true);
      const response = await fetch(`http://localhost:5154/api/quiz?quizId=1`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      });

      if (response.ok) {
        const responseBody = await response.json();
        setUserResult(responseBody);
        setIsResult(true);
        console.log(responseBody)
      }
    } catch (error) {
      console.error('Błąd otrzymania wyniku', error);
      setIsResult(false);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };
  const testQuestionsItems = quiz.questions.map((el) => (
    <TestQuestionsItem handleAnswerSelection={handleAnswerSelection} question={el} key={el.id} />
  ));
  return (
    <>
      <section style={{ height: '100%' }}>
        <Container
          maxWidth="lg"
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ mb: '20px', fontWeight: 600, color: theme.palette.primary.main }}>
            {quiz.name}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {testQuestionsItems}
          </Box>
          {error && <Alert severity="error">Prosimy odpowiedzieć na wszystkie pytania!</Alert>}
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Button
              onClick={() => submitTest()}
              sx={{ width: '40%', my: '30px' }}
              variant="contained"
              color="primary"
              fullWidth
              type="submit">
              Sprawdz swoj wynik
            </Button>
          )}
        </Container>
      </section>
    </>
  );
};

export default TestQuestionsList;
