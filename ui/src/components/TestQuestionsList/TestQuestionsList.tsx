import { Box, Container , Button} from '@mui/material';
import React from 'react';
import { TestQuestionsItem } from '..';

const AUTISMTESTQUESTIONS = [
    {
      id: 1,
      question: "Czy osoba unika kontaktu wzrokowego?",
      answers: ["Zawsze", "Czasami", "Rzadko"]
    },
    {
      id: 2,
      question: "Czy osoba jest wrażliwa na bodźce sensoryczne (np. światło, dźwięki)?",
      answers: ["Bardzo wrażliwa", "Średnio wrażliwa", "Nie wrażliwa"]
    },
    {
      id: 3,
      question: "Czy osoba ma trudności w zrozumieniu sygnałów społecznych?",
      answers: ["Zawsze", "Okazjonalnie", "Rzadko"]
    },
    {
      id: 4,
      question: "Czy osoba angażuje się w powtarzalne zachowania (np. machanie rękami, kołysanie się)?",
      answers: ["Często", "Czasami", "Rzadko"]
    },
    {
      id: 5,
      question: "Czy osoba interesuje się wąskim zakresem tematów?",
      answers: ["Bardzo skoncentrowane zainteresowania", "Średnie zainteresowania", "Różnorodne zainteresowania"]
    },
    {
      id: 6,
      question: "Czy osoba ma trudności z zmianami w rutynie?",
      answers: ["Silna awersja do zmian", "Trudności w adaptacji", "Łatwo się adaptuje"]
    },
    {
      id: 7,
      question: "Czy osoba ma trudności z werbalną komunikacją?",
      answers: ["Ograniczona komunikacja werbalna", "Średnia komunikacja werbalna", "Silna komunikacja werbalna"]
    },
    {
      id: 8,
      question: "Czy osoba czuje się komfortowo w sytuacjach społecznych?",
      answers: ["Nieswojo", "Średni komfort", "Bardzo komfortowo"]
    }
  ];

const TestQuestionsList: React.FC = () => {
    const testQuestionsItems = AUTISMTESTQUESTIONS.map((el) => <TestQuestionsItem question={el.question} answers={el.answers} key={el.id}/>)
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
