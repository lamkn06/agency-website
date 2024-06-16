import { Box, Container } from '@mui/material';
import { redirect } from 'next/navigation';

const Page = () => {
  redirect('/shop');
  return (
    <>
      <Box>
        <Container maxWidth="xl"></Container>
      </Box>
    </>
  );
};

export default Page;
