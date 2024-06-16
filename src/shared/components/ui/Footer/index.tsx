import { Box, Grid, Typography } from '@mui/material';

import { PageWrapper } from '../PageWrapper';
import { dataFooter, dataInformationBottom } from './constant';

const Footer = () => {
  return (
    <Box display={'flex'} flexDirection={'column'}>
      <PageWrapper>
        <Box py="50px" display={'flex'} flexDirection={'column'}>
          <Box>
            <Grid container spacing={3} columns={12}>
              {dataFooter.map((footer) => (
                <Grid item xs={12} sm={6} lg={3} key={footer.id}>
                  <Box display={'flex'} flexDirection={'column'}>
                    <Typography
                      pb={'12px'}
                      fontSize={'18px'}
                      fontWeight={600}
                      letterSpacing={'1px'}
                      position={'relative'}
                      sx={{
                        '&::before': {
                          content: '""',
                          background: '#da1a32',
                          width: '24px',
                          height: '1px',
                          position: 'absolute',
                          display: 'inline-block',
                          bottom: '0px',
                          left: '0px',
                        },
                      }}
                    >
                      {footer.title}
                    </Typography>
                    <Box pt={'12px'} display={'flex'} flexDirection={'column'}>
                      {footer.subData.map((item, index) => (
                        <Typography
                          key={index}
                          fontWeight={500}
                          letterSpacing={'1px'}
                          fontSize={'16px'}
                          py={'4px'}
                          sx={{
                            ':hover': {
                              transition: 'all .3s ease',
                              color: '#da1a32',
                              cursor: 'pointer',
                            },
                          }}
                        >
                          {item.name}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Typography my={'30px'} color={'#545151'} fontSize={'12px'}>
            Copyright © 2024 King Arthur Baking Company, Inc. All rights reserved.
          </Typography>
          <Box display={'flex'} flexDirection={'row'} flexWrap={'wrap'}>
            {dataInformationBottom.map((item, index) => (
              <Box
                key={index}
                borderRight={index !== dataInformationBottom.length - 1 ? '1px solid black' : ''}
                pr={'12px'}
                pl={index > 0 ? '12px' : '0px'}
                height={'14px'}
                mb={{ xs: '12px', lg: '0px' }}
              >
                <Typography fontSize={'12px'} color={'#545151'}>
                  {item.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </PageWrapper>
    </Box>
  );
};

export default Footer;
