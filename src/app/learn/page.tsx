import { Box, Grid, Typography } from '@mui/material';

import { ItemCategory } from '../../shared/components/ui/ItemCategory';
import { PageWrapper } from '../../shared/components/ui/PageWrapper';
import { listLearn } from './constant';

export const metadata = {
  title: 'Learn',
  description: 'Learn Description',
};

const Page = () => {
  return (
    <Box pb={'40px'} pt={{ xs: '75px', lg: '125px' }} bgcolor={'#f8f5f0'}>
      <PageWrapper>
        <Box my={'80px'} display={'flex'} flexDirection={'column'} gap={'40px'}>
          <Box
            display={'flex'}
            flexDirection={{ xs: 'column', md: 'row' }}
            justifyContent={'space-between'}
            gap={'20px'}
          >
            <Typography
              textAlign={'center'}
              variant="h2"
              fontWeight={500}
              fontSize={'46px'}
              width={'100%'}
            >
              What do you want to{' '}
              <span
                style={{
                  color: '#da1a32',
                  fontWeight: 500,
                }}
              >
                Bake
              </span>
              ?
            </Typography>
            <Box width={'100%'} fontWeight={300} letterSpacing={'2px'} fontSize={'20px'}>
              Whether you’re a seasoned baker or just starting out, you’ve come to the right place.
              In these pages we cover the essentials of baking, whether you want to learn to make
              bread, cake, cookies — or all of the above! Dig into our videos, sign up for a class,
              or dive into a baking topic by scrolling below.
            </Box>
          </Box>
          <Box mt={'40px'}>
            <Grid container spacing={3} columns={12}>
              {listLearn.map((learn, index) => (
                <Grid item xs={12} sm={6} lg={4} key={index}>
                  <ItemCategory
                    item={learn}
                    style={{
                      textAlign: 'center',
                      fontWeight: 400,
                      fontSize: '24px',
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </PageWrapper>
    </Box>
  );
};

export default Page;
