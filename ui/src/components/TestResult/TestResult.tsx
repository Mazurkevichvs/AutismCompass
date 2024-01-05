import { Container, Typography, Box, TextField, Button, useTheme } from '@mui/material';
import React from 'react';
import { UserResult } from '../../types/types';

interface TestResultProps {
  userResult: UserResult
}

const TestResult: React.FC<TestResultProps> = ({userResult}) => {
  const theme = useTheme()
  return (
    <>
      <section>
        <Container maxWidth="lg" sx={{display:'flex', flexDirection:'column', alignItems:'center', color:theme.palette.primary.main}}>
          <Typography variant="h4" gutterBottom mb={'20px'}>
          Wynik: Istnieje wysokie prawdopodobieństwo, ze znajdujesz się w spektrum autyzmu! 
          </Typography>

          <Typography mb={'30px'} variant="body1" align="left" gutterBottom>
          {userResult.details}
          </Typography>
          <Typography mb={'50px'} variant="body1" align="left" gutterBottom>
          Lorem ipsum dolor sit amet consectetur. Est orci amet gravida netus molestie sagittis fermentum. Sed nullam nullam quis est orci. Maecenas lectus pretium egestas auctor ultricies fringilla felis ullamcorper. Ut cras urna ante massa ante tempus nisi mauris aliquet. Imperdiet amet diam nisl tellus eget vehicula. Nisl malesuada mi dignissim pellentesque aliquet. Magna accumsan maecenas volutpat varius facilisi nunc ac. Molestie non sit morbi vitae elementum convallis fermentum. Montes vitae ornare quis aliquet diam dui vel cursus. Auctor cursus consectetur metus porttitor consequat vestibulum fringilla metus.
          </Typography>
          <Box sx={{p:'25px', borderRadius:'15px', bgcolor:'#E6F1F8', width:'50%'}}>
          <Typography variant="h6" gutterBottom mb={'20px'}>
          Podaj adres email na który wyślemy wyniki: 
          </Typography>
          <form style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <Box sx={{ width:'100%'}}>
                  <TextField sx={{mb:'20px'}} label="Email" fullWidth variant="filled"  type="email" required /> 
                </Box>
                <Button
                sx={{width:'50%'}}
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit">
                  Zatwierdź
                </Button>
              </form>
          </Box>

        </Container>
      </section>
    </>
  );
};

export default TestResult;
