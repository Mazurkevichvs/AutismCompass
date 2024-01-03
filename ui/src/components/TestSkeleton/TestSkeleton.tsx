import { Box, Container, Skeleton } from '@mui/material'
import React from 'react'

const TestSkeleton:React.FC = () => {
  return (
    <>
    <section style={{height:'100%'}}>
    <Container maxWidth="lg" sx={{display:'flex', flexDirection:'column', alignItems:'center'}} >
    <Skeleton variant="rounded" sx={{ height:'36px', mb:'40px', width:'430px' }} />
    <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>
    {[...new Array(6)].map((_el, id) => <Box key={id} sx={{display:'flex', flexWrap:'wrap', justifyContent:'space-between', width:'45%',mb:'70px'}}>
        <Skeleton variant='rounded' sx={{ fontSize: '22px', width:'500px', height:'36px', mb:'30px'}} />
        {[...new Array(5)].map((_el, id) => <Skeleton key={id} variant='rounded' width={'100%'} height={35} sx={{mb:'12px'}} /> ) }  
    </Box>)}
    </Box>
    </Container>
    </section>
    </>
  )
}

export default TestSkeleton