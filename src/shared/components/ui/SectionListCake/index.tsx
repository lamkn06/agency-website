'use client';

import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

import { PageWrapper } from '../PageWrapper';

interface Props {
  bgcolor: string;
  render: ReactNode;
  title: string;
}

export const SectionListCake = (props: Props) => {
  const { bgcolor = 'white', render, title } = props;
  return (
    <Box bgcolor={bgcolor} py={'40px'}>
      <PageWrapper>
        <Box display={'flex'} gap={'40px'} mb={'20px'}>
          <Typography
            variant="h3"
            fontSize={34}
            fontWeight={700}
            width={'100%'}
            textAlign={'center'}
            color={'black'}
          >
            {title}
          </Typography>
        </Box>

        {render}
      </PageWrapper>
    </Box>
  );
};
