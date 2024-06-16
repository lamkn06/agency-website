'use client';

import { Box, Container } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const PageWrapper = (props: Props) => {
  const { children } = props;
  return (
    <Box>
      <Container maxWidth="xl">{children}</Container>
    </Box>
  );
};
