'use client';

import { Box, Container, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { dataNavbar, listIconNavbar, SubNavType } from '../constant';

export const NavbarDesktop = () => {
  const pathname = usePathname();
  const current = dataNavbar.find((item) => pathname.split('/').includes(item.id));
  return (
    <Box
      sx={{
        display: { lg: 'block', xs: 'none' },
      }}
    >
      <Box display={'flex'} flexDirection={'column'}>
        <Container maxWidth="xl">
          <Box display={'flex'} alignItems={'center'} height={'70px'}>
            <Box width={'110px'}>1</Box>
            <Box display={'flex'} gap={'60px'} width={'100%'} color={'black'}>
              {dataNavbar.map((navbar: SubNavType) => (
                <Link
                  href={navbar.link ? navbar.link : '#'}
                  key={navbar.id}
                  style={{
                    textDecoration: 'none',
                    color: pathname.split('/').includes(navbar.id) ? '#da1a32' : 'black',
                    fontWeight: pathname.split('/').includes(navbar.id) ? 700 : 400,
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    fontSize: '14px',
                  }}
                >
                  <Typography
                    sx={{
                      ':hover': {
                        transition: 'all .3s ease',
                        color: '#da1a32',
                      },
                    }}
                  >
                    {navbar.name}
                  </Typography>
                </Link>
              ))}
            </Box>

            <Box display={'flex'}>
              {listIconNavbar.map((item) => (
                <Box
                  width={'44px'}
                  sx={{
                    aspectRatio: 1,
                    cursor: 'pointer',
                  }}
                  display={'flex'}
                  alignItems={'center'}
                  key={item.id}
                >
                  {item.icon}
                </Box>
              ))}
            </Box>
          </Box>
        </Container>

        <Box bgcolor={'#f8f5f0'} color={'black'} borderBottom={'1px solid white'}>
          <Container maxWidth="xl">
            <Box
              pl={'110px'}
              pr={'110px'}
              width={'100%'}
              height={'54px'}
              display={'flex'}
              alignItems={'center'}
            >
              {current &&
                current.subNav &&
                current.subNav.map((sub) => (
                  <Typography
                    key={sub.id}
                    py={'18px'}
                    px={'11px'}
                    fontSize={'13px'}
                    textTransform={'uppercase'}
                    letterSpacing={'1.5px'}
                  >
                    {sub.name}
                  </Typography>
                ))}
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};
