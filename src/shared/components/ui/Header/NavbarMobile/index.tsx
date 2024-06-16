'use client';

import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Box, Collapse, Container, Paper } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { dataNavbar, listIconNavbar } from '../constant';

export const NavbarMobile = () => {
  const pathname = usePathname();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleSetIsOpen = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <>
      <Box
        sx={{
          display: { lg: 'none', xs: 'block' },
        }}
      >
        <Container maxWidth="xl">
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
            height={'70px'}
          >
            <Box
              width={'44px'}
              sx={{
                aspectRatio: 1,
                cursor: 'pointer',
              }}
              display={'flex'}
              alignItems={'center'}
              onClick={() => {
                handleSetIsOpen();
              }}
            >
              {!isOpenMenu ? (
                <MenuRoundedIcon
                  fontSize="medium"
                  style={{
                    fill: 'black',
                  }}
                />
              ) : (
                <CloseRoundedIcon
                  fontSize="medium"
                  style={{
                    fill: 'black',
                  }}
                />
              )}
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

        <Collapse
          orientation="horizontal"
          in={isOpenMenu}
          sx={{
            height: '100%',
            width: '100%',
            top: '70px',
            position: 'fixed',
          }}
        >
          <Paper
            sx={{
              borderRadius: '0',
              height: '100%',
              width: '100%',
              backgroundColor: 'white',
              boxShadow: '0',
            }}
            elevation={4}
          >
            <Box p="12px" display={'flex'} flexDirection={'column'}>
              {dataNavbar.map((navbar) => (
                <Box
                  key={navbar.id}
                  height={60}
                  width={270}
                  borderBottom={'1px solid #d8d8d8'}
                  display={'flex'}
                  flexDirection={'row'}
                  justifyContent={'space-between'}
                >
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
                      margin: '18px 11px',
                    }}
                    onClick={() => {
                      handleSetIsOpen();
                    }}
                  >
                    {navbar.name}
                  </Link>
                  <Box
                    width={'44px'}
                    sx={{
                      aspectRatio: 1,
                      cursor: 'pointer',
                    }}
                    display={'flex'}
                    alignItems={'center'}
                    onClick={() => {}}
                  >
                    <ChevronRightRoundedIcon
                      fontSize="medium"
                      style={{
                        fill: 'black',
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Paper>
        </Collapse>
      </Box>
    </>
  );
};
