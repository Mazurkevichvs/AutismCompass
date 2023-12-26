import { Box, Container , Button} from '@mui/material';
import React from 'react';
import { TestQuestionsItem } from '..';
import { AUTISMTESTQUESTIONS } from '../../consts/consts';
import { AUTISMTESTANSWERS } from '../../consts/consts';



const TestQuestionsList: React.FC = () => {
    const testQuestionsItems = AUTISMTESTQUESTIONS.map((el) => <TestQuestionsItem question={el.question} answers={AUTISMTESTANSWERS} key={el.id}/>)
  return (
    <>
      <section style={{height:'100%'}}>
        <Container maxWidth="lg" sx={{display:'flex', flexDirection:'column', alignItems:'center'}} >
            <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>
            {testQuestionsItems}
            </Box>
            <Button
            sx={{width:'40%', my:'30px'}}
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit">
                  Sprawdz swoj wynik
                </Button>
        </Container>
      </section>
    </>
  );
};

export default TestQuestionsList;
